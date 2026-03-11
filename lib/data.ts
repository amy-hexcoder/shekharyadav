export type Post = {
  id: string;
  title: string;
  description: string;
  readTime: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  tag?: string;
};

export const recentPosts: Post[] = [
  {
    id: 'p1',
    title: 'The Builder’s Loop: Ship, Measure, Learn',
    description: 'A lightweight cadence for iterating on products without drowning in process.',
    readTime: '5 min',
    href: '#',
  },
  {
    id: 'p2',
    title: 'From Idea to Prototype in 48 Hours',
    description: 'The exact toolkit I use to validate concepts over a single weekend.',
    readTime: '6 min',
    href: '#',
  },
];

export const recentProjects: Project[] = [
  {
    id: 'x1',
    title: 'Prompt Canvas',
    description: 'A tiny utility for testing prompts and sharing results.',
    href: '#',
    tag: 'Experiment',
  },
  {
    id: 'x2',
    title: 'Metrics Zero',
    description: 'Make metrics dashboards that don’t suck. Opinionated templates.',
    href: '#',
    tag: 'Toolkit',
  },
  {
    id: 'x3',
    title: 'Founders’ Notes',
    description: 'A living notebook of patterns, traps, and mental models.',
    href: '#',
    tag: 'Playbook',
  },
];
