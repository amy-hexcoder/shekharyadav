'use client';

import { FormEvent, useState, useMemo} from 'react';

function getOrCreateAnonId(): string {
  const key = '23v_anonymous_id';
  let v = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
  if (!v) {
    v = (typeof crypto !== 'undefined' && 'randomUUID' in crypto) ? crypto.randomUUID() : `anon_${Math.random().toString(36).slice(2)}`;
    try { window.localStorage.setItem(key, v); } catch {}
  }
  return v!;
}

function collectClientContext() {
  if (typeof window === 'undefined') return null;
  const url = new URL(window.location.href);
  const params = url.searchParams;

  return {
    page: {
      url: url.toString(),
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || null,
    },
    utm: {
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_term: params.get('utm_term'),
      utm_content: params.get('utm_content'),
      gclid: params.get('gclid'),
      fbclid: params.get('fbclid'),
    },
    device: {
      user_agent: navigator.userAgent,
      language: navigator.language,
      languages: navigator.languages,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      viewport: { width: window.innerWidth, height: window.innerHeight },
      screen: { width: window.screen.width, height: window.screen.height, colorDepth: window.screen.colorDepth, pixelRatio: window.devicePixelRatio },
      hardwareConcurrency: (navigator as any).hardwareConcurrency ?? null,
      deviceMemory: (navigator as any).deviceMemory ?? null,
      doNotTrack: (navigator as any).doNotTrack ?? (window as any).doNotTrack ?? null,
      cookieEnabled: navigator.cookieEnabled,
      brands: (navigator as any).userAgentData?.brands ?? null,
      mobile: (navigator as any).userAgentData?.mobile ?? null,
      platform: (navigator as any).userAgentData?.platform ?? navigator.platform ?? null,
    },
    session: { anonymous_id: getOrCreateAnonId() },
  };
}

export default function Newsletter() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const context = useMemo(() => collectClientContext(), []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setError(null);

    const form = new FormData(e.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const company = String(form.get('company') || '');
    const message = String(form.get('message') || '');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, client_context: context }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data?.ok) {
        setState('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setState('error');
        setError(data?.error || 'Failed to subscribe.');
      }
    } catch {
      setState('error');
      setError('Network error. Please try again.');
    }
  }

  return (
    <section id="subscribe" className="section">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="card p-6 md:p-10 bg-white">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Join 500+ builders getting weekly insights
          </h2>
          <p className="mt-3 text-neutral-700">
            No spam. No fluff. Just honest reflections on building products, leading teams, and staying curious.
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="email"
              required
              placeholder="you@domain.com"
              className="field flex-1"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={state === 'loading'}
              className="btn"
            >
              {state === 'loading' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>

          {state === 'success' && (
            <p className="mt-3 text-sm text-green-700">Thanks — check your inbox for a confirmation.</p>
          )}
          {state === 'error' && (
            <p className="mt-3 text-sm text-red-700">Something went wrong. Please try again.</p>
          )}
        </div>
      </div>
    </section>
  );
}
