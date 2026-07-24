import { lazy, Suspense } from 'react';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Achievements from '@/sections/Achievements';
import Contact from '@/sections/Contact';

const Projects = lazy(() => import('@/sections/Projects'));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Suspense
        fallback={
          <div className="section-pad container-narrow text-muted-foreground">
            Loading projects…
          </div>
        }
      >
        <Projects />
      </Suspense>
      <Achievements />
      <Contact />
    </>
  );
}
