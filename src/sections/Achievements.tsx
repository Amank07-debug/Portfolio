import { achievements } from '@/data/portfolio';

export default function Achievements() {
  return <section className="section-pad py-16"><div className="container-narrow"><div className="editorial-rule grid gap-8 pt-8 lg:grid-cols-[.45fr_1fr]"><p className="eyebrow">A few markers</p><div className="grid gap-4 sm:grid-cols-3">{achievements.map((item, index) => <div key={item.title} className="border-l border-border pl-4"><p className="font-mono text-xs text-accent">0{index + 1}</p><h3 className="mt-3 text-sm font-medium leading-5">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{item.detail}</p></div>)}</div></div></div></section>;
}
