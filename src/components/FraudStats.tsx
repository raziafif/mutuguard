"use client";

import { useI18n } from "@/lib/i18n";

const reportIcons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
];

const statIcons = [
  <svg key="s0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  <svg key="s1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="s2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
];

const downloadIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);

const reportKeys = ["cnam", "hcfps", "cdc"] as const;
const statKeys = ["stat1", "stat2", "stat3"] as const;
const downloadKeys = ["dl1", "dl2", "dl3"] as const;

const statColors = [
  { bg: "bg-danger/10", text: "text-danger", border: "border-danger/20" },
  { bg: "bg-warning/10", text: "text-warning", border: "border-warning/20" },
  { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
];

export default function FraudStats() {
  const { t } = useI18n();

  return (
    <section id="fraud-stats" className="py-20 sm:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-danger uppercase tracking-wider mb-3">
            {t("fraudStats.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("fraudStats.title")}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {t("fraudStats.subtitle")}
          </p>
        </div>

        {/* Statistics metrics */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {statKeys.map((key, i) => (
            <div
              key={key}
              className={`relative p-8 bg-white rounded-2xl border ${statColors[i].border} text-center overflow-hidden`}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20" style={{ color: "var(--color-primary)" }} />
              <div className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl ${statColors[i].bg} ${statColors[i].text}`}>
                {statIcons[i]}
              </div>
              <p className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${statColors[i].text}`}>
                {t(`fraudStats.${key}.value`)}
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {t(`fraudStats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>

        {/* Official report cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground text-center mb-8">
            {t("fraudStats.reportsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reportKeys.map((key, i) => (
              <div
                key={key}
                className="group flex flex-col p-6 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {reportIcons[i]}
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {t(`fraudStats.${key}.title`)}
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  {t(`fraudStats.${key}.desc`)}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition-colors"
                >
                  {t("fraudStats.viewReport")}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Positioning */}
        <div className="max-w-3xl mx-auto mb-16 p-8 sm:p-10 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3">
            {t("fraudStats.positioning.title")}
          </h3>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            {t("fraudStats.positioning.desc")}
          </p>
          <a
            href="#demo"
            className="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm font-medium text-primary bg-white rounded-xl hover:bg-white/90 transition-colors"
          >
            {t("fraudStats.positioning.cta")}
            <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Downloads */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-foreground text-center mb-6">
            {t("fraudStats.downloads.title")}
          </h3>
          <div className="space-y-3">
            {downloadKeys.map((key) => (
              <a
                key={key}
                href="#"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {downloadIcon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {t(`fraudStats.${key}.title`)}
                  </p>
                  <p className="text-xs text-muted">PDF</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-primary transition-colors flex-shrink-0"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
