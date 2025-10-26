import { useState } from 'react';
import { Rocket, Menu, X, Github, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#about', label: 'About' },
    { href: '#join', label: 'Join' },
  ];

  return (
    <header className="sticky top-0 z-20 w-full bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-violet-600/20 text-violet-400">
              <Rocket className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight">AR/VR Club</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-zinc-300 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href="#join"
                className="rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500 transition-colors"
              >
                Join
              </a>
              <a
                href="mailto:club@example.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-zinc-200 hover:text-white hover:border-white/20"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-zinc-200 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="rounded-md bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-500"
              >
                Join
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
