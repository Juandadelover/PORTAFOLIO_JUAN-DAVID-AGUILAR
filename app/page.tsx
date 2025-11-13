import dynamic from 'next/dynamic';
import Hero from './sections/Hero';

const About = dynamic(() => import('./sections/About/index'), {
  loading: () => <div className="min-h-screen bg-gray-100 dark:bg-gray-900 animate-pulse" />
});
const Projects = dynamic(() => import('./sections/Projects/index'), {
  loading: () => <div className="min-h-screen bg-gray-100 dark:bg-gray-900 animate-pulse" />
});
const CTA = dynamic(() => import('./sections/CTA/index'), {
  loading: () => <div className="min-h-screen bg-gray-100 dark:bg-gray-900 animate-pulse" />
});
const Contact = dynamic(() => import('./sections/Contact'), {
  loading: () => <div className="min-h-screen bg-gray-100 dark:bg-gray-900 animate-pulse" />
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="h-screen">
        <Hero />
      </div>
      <About />
      <Projects />
      <CTA />
      <Contact />
    </main>
  );
}
