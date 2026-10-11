import { skillGroups } from '@/data/portfolio';

export default function Skills() {
  return <section className="section-pad py-16 md:py-20"><div className="container-narrow"><div className="editorial-rule grid gap-8 pt-8 lg:grid-cols-[.45fr_1fr]"><p className="eyebrow">Technical toolkit</p><div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">{skillGroups.map(group => <div key={group.title} className="border-b border-border pb-5"><h3 className="font-mono text-xs uppercase tracking-[.14em] text-primary">{group.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{group.items.join(' · ')}</p></div>)}</div></div></div></section>;
}
