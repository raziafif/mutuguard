"use client";

import { useI18n } from "@/lib/i18n";

const items = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
    key: "item1",
    color: "primary" as const,
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    key: "item2",
    color: "accent" as const,
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10z" /></svg>,
    key: "item3",
    color: "success" as const,
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    key: "item4",
    color: "primary" as const,
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    key: "item5",
    color: "accent" as const,
  },
];

const colorMap = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", glow: "group-hover:shadow-primary/10" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20", glow: "group-hover:shadow-accent/10" },
  success: { bg: "bg-success/10", text: "text-success", border: "border-success/20", glow: "group-hover:shadow-success/10" },
};

export default function Features() {
  const { t } = useI18n();

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            {t("features.label")}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {t("features.title")}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item) => {
            const colors = colorMap[item.color];
            return (
              <div key={item.key} className={`group relative p-8 bg-white rounded-2xl border ${colors.border} hover:shadow-xl ${colors.glow} transition-all`}>
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${colors.bg} ${colors.text} mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {t(`features.${item.key}.title`)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {t(`features.${item.key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
