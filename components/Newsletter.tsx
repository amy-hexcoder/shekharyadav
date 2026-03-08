'use client';

import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    // TODO: Replace with ConvertKit/Buttondown/Ghost endpoint
    // For now, fake it:
    setTimeout(() => setStatus('done'), 800);
  }

  return (
    <section id="subscribe" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
      <div className="rounded-2xl border border-neutral-200 p-6 md:p-10 bg-white">
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
            className="flex-1 rounded-md border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-600"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-md bg-cyan-600 text-white px-6 py-3 hover:bg-cyan-700 transition disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>

        {status === 'done' && (
          <p className="mt-3 text-sm text-green-700">Thanks — check your inbox for a confirmation.</p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-700">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
