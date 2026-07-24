import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { navLinks, profile } from '@/data/portfolio';
import { useScroll } from '@/hooks/useScroll';
import { Button } from '@/components/ui/Button';
import { gsap, useGSAP } from '@/lib/gsap';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollTo } = useScroll();
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isReduced: '(prefers-reduced-motion: reduce)',
          isMotion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const { isReduced } = context.conditions as {
            isReduced: boolean;
            isMotion: boolean;
          };

          if (isReduced) {
            gsap.set(menu, {
              autoAlpha: open ? 1 : 0,
              y: 0,
              display: open ? 'block' : 'none',
            });
            return;
          }

          if (open) {
            gsap.set(menu, { display: 'block' });
            gsap
              .timeline({ defaults: { ease: 'power3.out' } })
              .fromTo(
                menu,
                { autoAlpha: 0, y: -10 },
                { autoAlpha: 1, y: 0, duration: 0.35 }
              )
              .fromTo(
                menu.querySelectorAll('a'),
                { autoAlpha: 0, y: 8 },
                { autoAlpha: 1, y: 0, stagger: 0.04, duration: 0.3 },
                '-=0.2'
              );
          } else {
            gsap.to(menu, {
              autoAlpha: 0,
              y: -8,
              duration: 0.25,
              ease: 'power2.in',
              onComplete: () => {
                gsap.set(menu, { display: 'none' });
              },
            });
          }
        },
        headerRef
      );

      return () => mm.revert();
    },
    { scope: headerRef, dependencies: [open], revertOnUpdate: true }
  );

  const handleNav = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-white/10 bg-background/75 backdrop-blur-xl'
          : 'bg-transparent'
      )}
    >
      <nav
        className="container-narrow flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#hero');
          }}
          className="font-display text-lg font-semibold tracking-tight text-foreground"
        >
          Aman<span className="text-primary">.</span>Kumar
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground"
            aria-label="GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <Button
            size="sm"
            className="ml-2"
            onClick={() => handleNav('#contact')}
          >
            Hire me
          </Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="border-b border-white/10 bg-background/95 px-4 pb-4 backdrop-blur-xl md:hidden"
        style={{ display: 'none' }}
      >
        <div className="flex flex-col gap-1 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNav(link.href);
              }}
              className="rounded-lg px-3 py-3 text-sm text-foreground hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
