import { Wrench, BookOpen, Sparkles } from 'lucide-react';

const items = [
  {
    title: 'Essays & Insights',
    body: 'Short, honest takes on product, startups, and the messy middle of building.',
    icon: BookOpen,
  },
  {
    title: 'Projects & Experiments',
    body: 'Tiny tools and weekend builds. Some ship, some break — all documented.',
    icon: Wrench,
  },
  {
    title: 'Resources & Recs',
    body: 'Books, frameworks, and kits I actually use. No fluff.',
    icon: Sparkles,
  },
];

export default function WhatYoullFind() {
  return (
    <section id="essays" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What you’ll find here</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map(({ title, body, icon: Icon }) => (
          <div
            key={title}
            className="rounded-xl border border-neutral-200 p-6 hover:shadow-sm transition bg-white"
          >
            <Icon className="w-6 h-6 text-cyan-600" />
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-2 text-neutral-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
