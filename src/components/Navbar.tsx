"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t, locale, toggle } = useI18n();

  const navLinks = [
    { label: t("nav.problem"), href: "#problem" },
    { label: t("nav.solution"), href: "#solution" },
    { label: t("nav.howItWorks"), href: "#how-it-works" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.mission"), href: "#mission" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              MutuGuard
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold border border-border rounded-lg hover:bg-surface transition-colors text-muted"
              aria-label="Switch language"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              {locale === "fr" ? "EN" : "FR"}
            </button>
            <a
              href="#demo"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t("nav.bookDemo")}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggle}
              className="px-2.5 py-1.5 text-xs font-semibold border border-border rounded-lg text-muted"
              aria-label="Switch language"
            >
              {locale === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-muted hover:text-foreground"
              aria-label="Toggle menu"
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-border">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 text-sm text-muted hover:text-foreground rounded-lg hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-primary"
            >
              {t("nav.bookDemo")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
