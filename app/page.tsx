import Hero from './sections/Hero';
import About from './sections/About/index';
import Projects from './sections/Projects/index';
import Contact from './sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="h-screen">
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
