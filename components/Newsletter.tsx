'use client';

import { FormEvent, useState } from 'react';

export default function Newsletter() {
  const [status, setStatus] = useState<'idle'|'loading'|'done'|'error'>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('done'), 800);
  }

  return (
    <section id="subscribe" className="section">
      <div className="container-tight px-4">
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
              disabled={status === 'loading'}
              className="btn-accent"
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
      </div>
    </section>
  );
}
