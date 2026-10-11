import { ArrowDownRight, Download } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { useScroll } from '@/hooks/useScroll';

export default function Hero() {
  const { scrollTo } = useScroll();

  return (
    <section id="top" className="section-pad pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container-narrow">
        <div className="grid items-end gap-10 lg:grid-cols-[1.55fr_.45fr]">
          <div><p className="eyebrow mb-7">Portfolio · 2026</p><h1 className="max-w-4xl font-display text-[clamp(3.1rem,8vw,7.5rem)] font-medium leading-[.9] tracking-[-.075em] text-foreground">I build useful software and <em className="font-normal text-primary">data-driven</em> products.</h1></div>
          <div className="border-l border-border pb-1 pl-5 text-sm leading-6 text-muted-foreground md:text-base">{profile.title}. I work across backend architecture, interactive frontends, and AI-assisted data workflows.</div>
        </div>
        <div className="editorial-rule mt-12 grid gap-7 pt-5 md:mt-20 md:grid-cols-[1fr_auto] md:items-start"><p className="max-w-xl text-base leading-7 text-muted-foreground">Currently learning in public through product builds, hackathons, and systems that connect a technical decision to a useful outcome.</p><div className="flex flex-wrap gap-3"><a href="#work" onClick={(event) => { event.preventDefault(); window.history.pushState(null, '', '#work'); scrollTo('#work'); }} className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90">View selected work <ArrowDownRight className="h-4 w-4" /></a><a href={profile.resumePath} download className="inline-flex items-center gap-2 border border-foreground px-5 py-3 text-sm font-medium transition hover:bg-foreground hover:text-primary-foreground"><Download className="h-4 w-4" /> Download résumé</a></div></div>
      </div>
    </section>
  );
}
