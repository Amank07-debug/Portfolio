import { experience } from '@/data/portfolio';

export default function Experience() {
  return <section id="experience" className="section-pad"><div className="container-narrow"><div className="mb-12 grid gap-5 md:grid-cols-[.45fr_1fr]"><p className="eyebrow">Experience</p><h2 className="font-display text-4xl font-medium leading-[.95] tracking-[-.05em] md:text-6xl">Learning by building in teams.</h2></div><div className="editorial-rule">{experience.map(item => <article key={item.id} className="grid gap-5 border-b border-border py-8 md:grid-cols-[.45fr_1fr]"><div><p className="font-mono text-xs tracking-wide text-primary">{item.period}</p><h3 className="mt-3 text-lg font-medium">{item.role}</h3><p className="mt-1 text-sm text-muted-foreground">{item.org}</p></div><ul className="space-y-3">{item.points.map(point => <li key={point} className="border-l border-accent pl-4 text-sm leading-6 text-muted-foreground">{point}</li>)}</ul></article>)}</div></div></section>;
}
