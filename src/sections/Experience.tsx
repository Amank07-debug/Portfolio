import { Briefcase } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Roles and impact"
            description="Internship and campus leadership experience, exactly as listed on my resume."
          />
        </Reveal>

        <StaggerReveal
          className="relative space-y-5 before:absolute before:left-[1.35rem] before:top-3 before:hidden before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-primary/60 before:to-transparent md:before:block"
          stagger={0.14}
        >
          {experience.map((item) => (
            <Card
              key={item.id}
              data-reveal-item
              className="relative p-6 md:ml-12 md:p-8"
            >
              <div className="absolute -left-[3.15rem] top-7 hidden h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background text-primary md:flex">
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                </div>
                <p className="font-mono text-xs text-primary sm:pt-1">
                  {item.period}
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
