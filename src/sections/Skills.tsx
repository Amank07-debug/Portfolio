import { skills } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const groups = [
  { title: 'Languages', items: skills.languages },
  { title: 'Frameworks / Libraries', items: skills.frameworks },
  { title: 'Databases', items: skills.databases },
  { title: 'Tools', items: skills.tools },
  { title: 'Coursework', items: skills.coursework },
] as const;

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Technical toolkit"
            description="Languages, frameworks, databases, and coursework from my resume — no fluff."
          />
        </Reveal>

        <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <Card
              key={group.title}
              data-reveal-item
              className="h-full p-5 md:p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
