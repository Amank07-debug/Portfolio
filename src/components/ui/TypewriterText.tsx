import { useEffect, useState } from 'react';
import { cn } from '@/utils/cn';

interface TypewriterTextProps {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  pauseMs?: number;
}

export function TypewriterText({
  words,
  className,
  typingSpeed = 55,
  pauseMs = 1600,
}: TypewriterTextProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: number;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = window.setTimeout(
        () => {
          const next = deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1);
          setText(next);
        },
        deleting ? typingSpeed / 1.6 : typingSpeed
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, pauseMs]);

  return (
    <span className={cn('inline-flex items-center', className)} aria-live="polite">
      {text}
      <span className="ml-0.5 inline-block h-[1.05em] w-[2px] animate-pulse bg-primary" />
    </span>
  );
}
