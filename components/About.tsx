import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-14 md:py-20">
      <div className="rounded-2xl border border-neutral-200 p-6 md:p-10 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Who’s behind this?</h2>
        <p className="mt-4 text-neutral-700 max-w-3xl">
          I’ve built and scaled startups, led product teams, and spent a lot of time in code editors
          and Figma. I believe the best way to learn is by doing — and then writing about it. This
          site is my digital workshop. If you’re into building, learning, and occasionally failing
          forward, you’re in the right place.
        </p>
        <div className="mt-6">
          <Link href="#" className="link-underline">More about me</Link>
        </div>
      </div>
    </section>
  );
}
