import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatYoullFind from '@/components/WhatYoullFind';
import RecentWork from '@/components/RecentWork';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatYoullFind />
        <RecentWork />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
