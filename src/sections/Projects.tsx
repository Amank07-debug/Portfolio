import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { projects } from '@/data/portfolio';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { StaggerReveal } from '@/components/ui/StaggerReveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/utils/cn';

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Backend systems, AI platforms, and edge-to-dashboard pipelines from my resume."
          />
        </Reveal>

        <StaggerReveal className="grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {projects.map((project) => (
            <div key={project.id} data-reveal-item className="h-full">
              <Tilt
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                glareEnable
                glareMaxOpacity={0.12}
                glareColor="#22d3ee"
                glarePosition="all"
                scale={1.01}
                transitionSpeed={1200}
                className="h-full"
              >
                <Card className="group flex h-full flex-col overflow-hidden p-0">
                  <div
                    className={cn(
                      'relative h-28 overflow-hidden border-b border-white/10',
                      'bg-gradient-to-br from-primary/25 via-background to-accent/20'
                    )}
                  >
                    <div className="absolute inset-0 opacity-40 grid-bg" />
                    <div className="absolute bottom-4 left-5 right-5">
                      {project.badge ? (
                        <span className="inline-flex rounded-md border border-primary/30 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary backdrop-blur">
                          {project.badge}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.subtitle}
                    </p>

                    <ul className="mt-5 flex-1 space-y-3">
                      {project.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-foreground/85"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition hover:text-primary/80"
                    >
                      <FaGithub className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </Card>
              </Tilt>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
