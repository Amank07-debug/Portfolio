import { profile } from '@/data/portfolio';

export function Footer() {
  return <footer className="px-5 pb-8 sm:px-8 lg:px-12"><div className="container-narrow flex flex-col justify-between gap-2 border-t border-border pt-5 font-mono text-[10px] uppercase tracking-[.12em] text-muted-foreground sm:flex-row"><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with React + TypeScript</span></div></footer>;
}
