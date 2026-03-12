"use client";

import { useI18n } from "@/lib/i18n";

const icons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
];

const keys = ["item1", "item2", "item3", "item4"];

export default function Trust() {
  const { t } = useI18n();

  return (
    <section className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {t("trust.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("trust.title")}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {t("trust.subtitle")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {keys.map((key, i) => (
            <div key={key} className="flex gap-4 p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                {icons[i]}
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {t(`trust.${key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`trust.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
