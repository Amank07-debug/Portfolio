import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { profile } from '@/data/portfolio';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-background/80">
      <div className="container-narrow flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}. Built for software engineering opportunities.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-primary"
            aria-label="GitHub"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground hover:bg-white/5 hover:text-primary"
            aria-label="LeetCode"
          >
            <FaCode className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
