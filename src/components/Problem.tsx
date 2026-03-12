"use client";

import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
];

const keys = ["item1", "item2", "item3", "item4"];

export default function Problem() {
  const { t } = useI18n();

  return (
    <section id="problem" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-danger uppercase tracking-wider mb-3">
            {t("problem.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("problem.title1")}{" "}
            <span className="text-danger">{t("problem.title2")}</span>
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {t("problem.subtitle")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {keys.map((key, i) => (
            <div key={key} className="relative group p-6 bg-white rounded-2xl border border-border hover:border-danger/30 transition-all hover:shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-danger/10 text-danger mb-4">
                {icons[i]}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {t(`problem.${key}.title`)}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {t(`problem.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
