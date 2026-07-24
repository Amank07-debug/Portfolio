import { FormEvent, useRef, useState } from 'react';
import { CheckCircle2, Loader2, Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { profile } from '@/data/portfolio';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PLACEHOLDER_PATTERN =
  /^(your[_-]?web3forms[_-]?access[_-]?key|changeme|xxx+|<.*>)$/i;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const inputClassName =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50';

function getAccessKey() {
  return String(import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '').trim();
}

function isAccessKeyConfigured(accessKey: string) {
  return Boolean(accessKey) && !PLACEHOLDER_PATTERN.test(accessKey);
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = (values: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    const errors: Record<string, string> = {};

    if (!values.name) errors.name = 'Please enter your name.';
    if (!values.email) {
      errors.email = 'Please enter your email.';
    } else if (!EMAIL_PATTERN.test(values.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!values.subject) errors.subject = 'Please enter a subject.';
    if (!values.message) errors.message = 'Please enter a message.';

    return errors;
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submittingRef.current || status === 'sending') return;

    const form = formRef.current ?? e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    const errors = validate({ name, email, subject, message });
    setFieldErrors(errors);
    setErrorMessage('');

    if (Object.keys(errors).length > 0) {
      setStatus('idle');
      return;
    }

    const accessKey = getAccessKey();

    if (!isAccessKeyConfigured(accessKey)) {
      setStatus('error');
      setErrorMessage(
        'Email service is not configured. Please try again later or email me directly.'
      );
      return;
    }

    submittingRef.current = true;
    setStatus('sending');

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          subject,
          message,
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to send your message right now.'
        );
      }

      form.reset();
      setFieldErrors({});
      setErrorMessage('');
      setStatus('success');
    } catch (err) {
      const detail = err instanceof Error ? err.message : '';

      setStatus('error');
      setErrorMessage(
        detail
          ? `Unable to send your message (${detail}). Please try again or email me directly.`
          : 'Something went wrong while sending your message. Please try again or email me directly.'
      );
    } finally {
      submittingRef.current = false;
    }
  };

  const isSending = status === 'sending';

  return (
    <section id="contact" className="section-pad relative pb-28">
      <div className="container-narrow">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something solid"
            description="Open to SDE, Full Stack, Backend (FastAPI), AI/ML, Data Science, and Software Engineering internships."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Card className="h-full space-y-5 p-6 md:p-8">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/30"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <p className="text-sm text-foreground">{profile.email}</p>
                </div>
              </a>
              <a
                href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-primary/30"
              >
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <p className="text-sm text-foreground">{profile.phone}</p>
                </div>
              </a>

              <div className="flex flex-wrap gap-2 pt-2">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground"
                >
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground"
                >
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground"
                >
                  <FaCode className="h-4 w-4" /> LeetCode
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-6 md:p-8">
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="space-y-4"
                noValidate
              >
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm text-muted-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    disabled={isSending}
                    aria-invalid={Boolean(fieldErrors.name)}
                    className={inputClassName}
                    placeholder="Your name"
                  />
                  {fieldErrors.name ? (
                    <p className="mt-1.5 text-xs text-red-400">{fieldErrors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    disabled={isSending}
                    aria-invalid={Boolean(fieldErrors.email)}
                    className={inputClassName}
                    placeholder="you@company.com"
                  />
                  {fieldErrors.email ? (
                    <p className="mt-1.5 text-xs text-red-400">{fieldErrors.email}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="subject" className="mb-1.5 block text-sm text-muted-foreground">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    required
                    autoComplete="off"
                    disabled={isSending}
                    aria-invalid={Boolean(fieldErrors.subject)}
                    className={inputClassName}
                    placeholder="What is this about?"
                  />
                  {fieldErrors.subject ? (
                    <p className="mt-1.5 text-xs text-red-400">{fieldErrors.subject}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={isSending}
                    aria-invalid={Boolean(fieldErrors.message)}
                    className={`${inputClassName} resize-y`}
                    placeholder="Tell me about the role or opportunity…"
                  />
                  {fieldErrors.message ? (
                    <p className="mt-1.5 text-xs text-red-400">{fieldErrors.message}</p>
                  ) : null}
                </div>

                {status === 'success' ? (
                  <div
                    role="status"
                    className="flex items-start gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>
                      Thank you — your message was sent successfully. I’ll get
                      back to you soon.
                    </p>
                  </div>
                ) : null}

                {status === 'error' && errorMessage ? (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
                  >
                    {errorMessage}
                  </div>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSending}
                  aria-busy={isSending}
                >
                  {isSending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                  {isSending ? 'Sending…' : 'Send message'}
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
