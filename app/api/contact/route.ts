// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

type AnyHeaders = { get(name: string): string | null };

function getClientIp(h: AnyHeaders): string | null {
  const xff = h.get('x-forwarded-for');
  if (xff) {
    const ip = xff.split(',')[0]?.trim();
    if (ip) return ip;
  }
  const rip = h.get('x-real-ip');
  return rip ? rip.trim() : null;
}

function getGeo(h: AnyHeaders) {
  // Common edge headers (e.g., Vercel). If unavailable, these will be null.
  return {
    country: h.get('x-vercel-ip-country') || null,
    region: h.get('x-vercel-ip-country-region') || null,
    city: h.get('x-vercel-ip-city') || null,
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, client_context } = body || {};

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { ok: false, error: 'Missing required fields: email' },
        { status: 400 }
      );
    }

    const apiKey = process.env.INGEST_API_KEY;
    const baseUrl = process.env.INGEST_BASE_URL;
    if (!apiKey || !baseUrl) {
      return NextResponse.json(
        { ok: false, error: 'Server is not configured with ingestion credentials' },
        { status: 500 }
      );
    }

    // Option 2: Use next/headers and await it to handle Promise<ReadonlyHeaders> cases
    const h = await headers();
    const ip = getClientIp(h);
    const geo = getGeo(h);
    const serverUA = h.get('user-agent') || null;

    // Merge/normalize client-provided context with server-trustworthy data
    const context = {
      page: {
        url: client_context?.page?.url ?? null,
        path: client_context?.page?.path ?? null,
        title: client_context?.page?.title ?? null,
        referrer: client_context?.page?.referrer ?? null,
      },
      utm: client_context?.utm ?? null,
      device: {
        user_agent: serverUA || client_context?.device?.user_agent || null,
        brands: client_context?.device?.brands ?? null,
        mobile: client_context?.device?.mobile ?? null,
        platform: client_context?.device?.platform ?? null,
        language: client_context?.device?.language ?? null,
        languages: client_context?.device?.languages ?? null,
        timezone: client_context?.device?.timezone ?? null,
        viewport: client_context?.device?.viewport ?? null,
        screen: client_context?.device?.screen ?? null,
        hardwareConcurrency: client_context?.device?.hardwareConcurrency ?? null,
        deviceMemory: client_context?.device?.deviceMemory ?? null,
        doNotTrack: client_context?.device?.doNotTrack ?? null,
        cookieEnabled: client_context?.device?.cookieEnabled ?? null,
      },
      session: {
        anonymous_id: client_context?.session?.anonymous_id ?? null,
      },
      network: {
        ip: ip ?? null,
        country: geo.country,
        region: geo.region,
        city: geo.city,
      },
      server_ts: new Date().toISOString(),
    };

    // Build the ingestion event
    const eventBody = {
      event_id: crypto.randomUUID(),
      event_name: 'contact_us_submitted',
      // According to the uploaded document, user_id/anonymous_id are optional but useful for joining events
      user_id: email,
      anonymous_id: context.session.anonymous_id || undefined,
      payload: {
        form: {
          name,
          email,
          company: company || null,
          message,
        },
        context,
      },
    };

    // Send to Ingest Event API
    // Per the uploaded doc:
    // - Endpoint: POST /api/v1.0/events
    // - Auth via Authorization: Bearer <api_key>
    // - Header table also lists x-api-key as required; include both for compatibility
    const res = await fetch(`${baseUrl}/api/v1.0/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'x-api-key': apiKey,
      },
      body: JSON.stringify(eventBody),
    });

    if (res.status === 200) {
      // Expected success response: { "status": "accepted", "event_id": "..." }
      const data = await res.json().catch(() => ({}));
      return NextResponse.json(
        {
          ok: true,
          status: 'accepted',
          event_id: data?.event_id || eventBody.event_id,
          message: 'Thanks — your message was sent.',
        },
        { status: 200 }
      );
    }

    const errorText = await res.text();
    return NextResponse.json(
      { ok: false, error: `Ingestion failed (${res.status}): ${errorText}` },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Unexpected server error' },
      { status: 500 }
    );
  }
}
