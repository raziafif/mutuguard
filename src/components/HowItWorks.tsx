"use client";

import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>,
];

const numbers = ["01", "02", "03", "04"];
const keys = ["step1", "step2", "step3", "step4"];

export default function HowItWorks() {
  const { t } = useI18n();

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {t("how.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("how.title")}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {t("how.subtitle")}
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />
          <div className="space-y-8">
            {keys.map((key, i) => (
              <div key={key} className="relative flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-white border-2 border-primary/20 flex items-center justify-center text-primary shadow-sm">
                  {icons[i]}
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-primary bg-primary-light px-2 py-0.5 rounded-md">
                      {t("how.step")} {numbers[i]}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t(`how.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed max-w-lg">
                    {t(`how.${key}.desc`)}
                  </p>
                  {i < 3 && (
                    <div className="sm:hidden w-px h-8 bg-border ml-8 mt-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
