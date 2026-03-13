"use client";

import { useI18n } from "@/lib/i18n";

export default function PrivacyPolicy() {
  const { t } = useI18n();

  const sections = [
    { title: t("privacy.s1.title"), content: t("privacy.s1.content") },
    { title: t("privacy.s2.title"), content: t("privacy.s2.content") },
    { title: t("privacy.s3.title"), content: t("privacy.s3.content") },
    { title: t("privacy.s4.title"), content: t("privacy.s4.content") },
    { title: t("privacy.s5.title"), content: t("privacy.s5.content") },
    { title: t("privacy.s6.title"), content: t("privacy.s6.content") },
    { title: t("privacy.s7.title"), content: t("privacy.s7.content") },
    { title: t("privacy.s8.title"), content: t("privacy.s8.content") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/mutuguard/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">MutuGuard</span>
          </a>
          <a href="/mutuguard/" className="text-sm text-muted hover:text-foreground transition-colors">
            {t("privacy.backHome")}
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          {t("privacy.title")}
        </h1>
        <p className="text-sm text-muted mb-10">
          {t("privacy.lastUpdated")}
        </p>

        <div className="prose prose-sm max-w-none">
          <p className="text-muted leading-relaxed mb-8">
            {t("privacy.intro")}
          </p>

          {sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-lg font-semibold text-foreground mb-3">
                {i + 1}. {section.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
