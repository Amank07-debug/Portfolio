import { Menu, X } from 'lucide-react';
import { useState, type MouseEvent } from 'react';
import { navLinks, profile } from '@/data/portfolio';
import { useScroll } from '@/hooks/useScroll';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollTo } = useScroll();

  const navigate = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    window.history.pushState(null, '', href);
    scrollTo(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="container-narrow flex min-h-16 items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary">
        <a href="#top" onClick={(event) => navigate(event, '#top')} className="font-display text-xl font-medium tracking-[-.05em]">Aman Kumar<span className="text-accent">.</span></a>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => <a key={link.href} href={link.href} onClick={(event) => navigate(event, link.href)} className="text-sm text-muted-foreground transition hover:text-primary">{link.label}</a>)}
          <a href={profile.resumePath} download className="border border-foreground px-3 py-2 text-xs font-medium uppercase tracking-wider transition hover:bg-foreground hover:text-primary-foreground">Résumé</a>
        </div>
        <button onClick={() => setOpen((value) => !value)} className="p-2 md:hidden" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open}>{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </nav>
      {open && <div className="border-t border-border bg-background px-5 pb-5 md:hidden"><div className="container-narrow flex flex-col pt-2">{navLinks.map((link) => <a onClick={(event) => navigate(event, link.href)} key={link.href} href={link.href} className="border-b border-border py-3 text-sm">{link.label}</a>)}<a onClick={() => setOpen(false)} href={profile.resumePath} download className="pt-4 text-sm text-primary">Download résumé</a></div></div>}
    </header>
  );
}
