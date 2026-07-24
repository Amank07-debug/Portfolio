import { GraduationCap, MapPin } from 'lucide-react';
import { education, profile } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Engineer focused on reliable backends and intelligent systems"
            description={profile.summary}
          />
        </Reveal>

        <StaggerReveal className="grid gap-5 md:grid-cols-2" stagger={0.12}>
          <Card data-reveal-item className="h-full p-6 md:p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">Education</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {education.degree}
            </p>
            <p className="mt-4 text-sm font-medium text-foreground">
              {education.institution}
            </p>
            <p className="mt-1 font-mono text-xs text-primary">
              {education.expected}
            </p>
          </Card>

          <Card data-reveal-item className="h-full p-6 md:p-8">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
              <MapPin className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold">Focus</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                Designing and building backend systems, REST APIs, and real-time
                applications using Python and FastAPI
              </li>
              <li>
                Full-stack development with modern JavaScript frameworks and React
              </li>
              <li>
                Strong foundations in data structures, algorithms, and AI
                specialization coursework
              </li>
            </ul>
          </Card>
        </StaggerReveal>
      </div>
    </section>
  );
}
