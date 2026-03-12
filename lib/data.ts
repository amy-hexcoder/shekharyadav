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
    title: 'Axyen.AI',
    description: 'AI for everyday tasks.',
    href: 'https://axyen.ai',
    tag: 'B2C',
  },
  {
    id: 'x2',
    title: 'Waine',
    description: 'Get AI-powered pairing recommendations tailored to your taste.',
    href: 'https://getwaine.com',
    tag: 'App',
  },
  {
    id: 'x3',
    title: 'Scalaix',
    description: 'Accelerate how you design, build, and deploy AI using open integrations, prompt engineering tools, and enterprise-grade scalability.',
    href: 'https://scalaix.com',
    tag: 'Enterprise',
  },
   {
    id: 'x4',
    title: 'Storye',
    description: 'Build Compelling Websites with Engaging Content.',
    href: 'https://storye.xyz',
    tag: 'Enterprise',
  },
];

// Add to existing data.ts

export type Comic = {
  id: string;
  title: string;
  imageUrl: string;
  altText: string;
  publishedAt: string; // e.g. "2024-01-15"
  caption?: string;
};

export const comics: Comic[] = [
  {
    id: 'c1',
    title: 'AI and the programmer dilemma',
    imageUrl: '/comics/AI-and-the-programmer-dilemma.png', // Replace with actual path
    altText: 'AI and the programmer dilemma',
    publishedAt: '2026-01-20',
    caption: 'The future of programming: arguing with AI.',
  },
   {
    id: 'c1',
    title: 'Coder in the LLM era.',
    imageUrl: '/comics/coder-in-llm-era.png', // Replace with actual path
    altText: 'Coder in the LLM Era',
    publishedAt: '2026-01-20',
    caption: 'Dev Life in the AI Era.',
  }
];

// Helper to get the latest comic
export const getLatestComic = () => comics[0];
