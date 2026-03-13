"use client";

import { useI18n } from "@/lib/i18n";

const missionIcons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
];

const audienceIcons = [
  <svg key="a0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  <svg key="a1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  <svg key="a2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="a3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
];

const missionKeys = ["item1", "item2", "item6"];
const audienceKeys = ["item1", "item2", "item3", "item4"];

export default function Mission() {
  const { t } = useI18n();

  return (
    <section id="mission" className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mission header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
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

        {/* 3 mission pillars */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {missionKeys.map((key, i) => (
            <div key={key} className="group p-5 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                {missionIcons[i]}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {t(`mission.${key}.title`)}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {t(`mission.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Who we serve */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-foreground text-center mb-6">
            {t("trust.title")}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {audienceKeys.map((key, i) => (
              <div key={key} className="flex gap-3 p-4 bg-white rounded-xl border border-border hover:border-primary/30 transition-all hover:shadow-md">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {audienceIcons[i]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-0.5">
                    {t(`trust.${key}.title`)}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {t(`trust.${key}.desc`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision banner */}
        <div className="max-w-3xl mx-auto p-8 sm:p-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white text-center">
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
