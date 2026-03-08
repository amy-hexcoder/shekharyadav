import { Wrench, BookOpen, Sparkles } from 'lucide-react';

const items = [
  { title: 'Essays & Insights', body: 'Short, honest takes on product, startups, and the messy middle of building.', icon: BookOpen },
  { title: 'Projects & Experiments', body: 'Tiny tools and weekend builds. Some ship, some break — all documented.', icon: Wrench },
  { title: 'Resources & Recs', body: 'Books, frameworks, and kits I actually use. No fluff.', icon: Sparkles },
];

export default function WhatYoullFind() {
  return (
    <section id="essays" className="section">
      <div className="container-tight px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What you’ll find here</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ title, body, icon: Icon }) => (
            <div key={title} className="card p-6 bg-white">
              <div className="flex items-center gap-3">
                <div className="pill">
                  <Icon className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
