"use client";

import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
];

const keys = ["item1", "item2", "item3", "item4", "item5", "item6"];

export default function Mission() {
  const { t } = useI18n();

  return (
    <section id="mission" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {t("mission.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("mission.title")}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {t("mission.subtitle")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keys.map((key, i) => (
            <div key={key} className="group p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                {icons[i]}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {t(`mission.${key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {t(`mission.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 max-w-3xl mx-auto p-8 sm:p-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            {t("mission.vision.title")}
          </h3>
          <p className="text-white/80 leading-relaxed max-w-xl mx-auto">
            {t("mission.vision.desc")}
          </p>
          <a href="#demo" className="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm font-medium text-primary bg-white rounded-xl hover:bg-white/90 transition-colors">
            {t("mission.vision.cta")}
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
