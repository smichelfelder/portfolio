"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Work", href: "/#work" },
  { label: "Why me", href: "/#why-me" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="bg-surface border border-border rounded-3xl md:rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
        <nav className="pl-6 pr-3 md:pr-2 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-headline text-lg hover:text-accent transition-colors"
          >
            steph.
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors link-hover"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/Stephanie-Michelfelder-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium px-5 py-2 rounded-full bg-foreground text-background hover:bg-accent hover:text-white transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-foreground transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-border">
            <ul className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-2xl font-headline text-foreground/70 hover:text-foreground transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
