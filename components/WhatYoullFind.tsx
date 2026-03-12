import { Wrench, BookOpen, Sparkles, Users } from 'lucide-react';

const items = [
  { 
    title: 'Product & Growth', 
    body: 'PMF signals, roadmaps that learn, pricing, and GTM that compounds. How to know when you\'ve found pull vs. push. What to build next when the roadmap feels like a wishlist. And why most growth advice is just dressed-up guesswork.', 
    icon: BookOpen 
  },
  { 
    title: 'Build Lab', 
    body: 'Tiny tools and system patterns — code, screenshots, shipped or scrapped. Weekend experiments with real numbers: latency, cost, what broke, what stuck. Sometimes it\'s a prototype that becomes production. Sometimes it\'s a lesson you ship without the code.', 
    icon: Wrench 
  },
  { 
    title: 'AI Applied', 
    body: 'Practical AI that survives prod: evals, costs, UX, and defensibility. Where models actually add leverage vs. where they\'re expensive theater. How to instrument, measure, and iterate without burning budget on hype. And why most "AI products" still feel like features waiting for a wrapper to fall off.', 
    icon: Sparkles 
  },
  { 
    title: 'Leadership & Team Ops', 
    body: 'Hiring for velocity, technical product craft, and execution under pressure. How to build teams that ship instead of plan. What changes when you\'re the one making the call with incomplete data. And why the best operators treat org design like system architecture.', 
    icon: Users 
  },
];

export default function WhatYoullFind() {
  return (
    <section id="essays" className="section">
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:pt-24 md:pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">What you’ll find here</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
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
