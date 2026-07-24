import { Trophy } from 'lucide-react';
import { achievements } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad relative">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition"
            description="Hackathon and competition results from my resume."
          />
        </Reveal>

        <StaggerReveal className="grid gap-4 md:grid-cols-3" stagger={0.12}>
          {achievements.map((item) => (
            <Card
              key={item.id}
              data-reveal-item
              className="h-full p-6 transition hover:border-primary/30 hover:shadow-glow"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.detail}
              </p>
            </Card>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
