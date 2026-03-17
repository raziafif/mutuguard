"use client";

import { useI18n } from "@/lib/i18n";
import { REPORT_URLS } from "@/lib/constants";

const problemIcons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="15" x2="15" y2="15" /></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
];

const reportIcons = [
  <svg key="r0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
  <svg key="r1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  <svg key="r2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
];

const problemKeys = ["item1", "item2", "item3", "item4"];
const statKeys = ["stat1", "stat2", "stat3"] as const;
const reportKeys = ["cnam", "hcfps", "cdc"] as const;

const statColors = [
  { bg: "bg-danger/10", text: "text-danger", border: "border-danger/20" },
  { bg: "bg-warning/10", text: "text-warning", border: "border-warning/20" },
  { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
];

const statIcons = [
  <svg key="s0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  <svg key="s1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
  <svg key="s2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
];

export default function Problem() {
  const { t } = useI18n();

  return (
    <section id="problem" className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
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

        {/* Stats bar */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {statKeys.map((key, i) => (
            <div key={key} className={`relative p-6 bg-white rounded-2xl border ${statColors[i].border} text-center`}>
              <div className={`w-11 h-11 mx-auto mb-3 flex items-center justify-center rounded-xl ${statColors[i].bg} ${statColors[i].text}`}>
                {statIcons[i]}
              </div>
              <p className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${statColors[i].text}`}>
                {t(`fraudStats.${key}.value`)}
              </p>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                {t(`fraudStats.${key}.label`)}
              </p>
            </div>
          ))}
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {problemKeys.map((key, i) => (
            <div key={key} className="relative group p-5 bg-white rounded-2xl border border-border hover:border-danger/30 transition-all hover:shadow-lg">
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-danger/10 text-danger mb-3">
                {problemIcons[i]}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">
                {t(`problem.${key}.title`)}
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                {t(`problem.${key}.desc`)}
              </p>
            </div>
          ))}
        </div>

        {/* Official sources */}
        <div>
          <h3 className="text-lg font-bold text-foreground text-center mb-6">
            {t("fraudStats.reportsTitle")}
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {reportKeys.map((key, i) => (
              <div key={key} className="group flex flex-col p-5 bg-white rounded-2xl border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  {reportIcons[i]}
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1.5 leading-snug">
                  {t(`fraudStats.${key}.title`)}
                </h4>
                <p className="text-xs text-muted leading-relaxed mb-3 flex-1">
                  {t(`fraudStats.${key}.desc`)}
                </p>
                <a href={REPORT_URLS[key]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary-dark transition-colors">
                  {t("fraudStats.viewReport")}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
