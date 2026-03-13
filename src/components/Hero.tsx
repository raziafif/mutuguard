"use client";

import { useI18n } from "@/lib/i18n";

export default function Hero() {
  const { t } = useI18n();

  const pills = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
      ),
      label: t("hero.pill1"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
      ),
      label: t("hero.pill2"),
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>
      ),
      label: t("hero.pill3"),
    },
  ];

  return (
    <section className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary/8 via-accent/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary-light rounded-full">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            {t("hero.badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            {t("hero.title1")}{" "}
            <span className="text-primary">{t("hero.title2")}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30">
              {t("hero.cta1")}
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#solution" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-foreground bg-white border border-border rounded-xl hover:bg-surface transition-all">
              {t("hero.cta2")}
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {pills.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm text-muted">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
