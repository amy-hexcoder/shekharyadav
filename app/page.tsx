// app/page.tsx
import Hero from '@/components/Hero';
import WhatYoullFind from '@/components/WhatYoullFind';
import RecentWork from '@/components/RecentWork';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';

export default function Page() {
  return (
    <>
      <Hero />
      <WhatYoullFind />
      <RecentWork />
      <About />
      <Newsletter />
    </>
  );
}
