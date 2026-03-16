"use client";

import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { BASE_PATH } from "@/lib/constants";

const CONSENT_KEY = "mutuguard_cookie_consent";

export default function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-foreground text-white rounded-2xl shadow-2xl border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-1">{t("cookie.title")}</p>
          <p className="text-xs text-white/60 leading-relaxed">
            {t("cookie.desc")}{" "}
            <a href={`${BASE_PATH}/cookies`} className="text-primary underline hover:text-primary/80">
              {t("cookie.learnMore")}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-medium text-white/60 border border-white/20 rounded-lg hover:bg-white/10 transition-colors"
          >
            {t("cookie.decline")}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-xs font-medium text-foreground bg-white rounded-lg hover:bg-white/90 transition-colors"
          >
            {t("cookie.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
