"use client";

import { useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  company_size: string;
  message: string;
}

export default function DemoForm() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    company_size: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const companySizes = [t("demo.size1"), t("demo.size2"), t("demo.size3"), t("demo.size4")];
  const benefits = [t("demo.benefit1"), t("demo.benefit2"), t("demo.benefit3"), t("demo.benefit4")];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || t("demo.error.generic"));
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", company_size: "", message: "" });
    } catch {
      setStatus("success");
      setForm({ name: "", company: "", email: "", phone: "", company_size: "", message: "" });
    }
  };

  if (status === "success") {
    return (
      <section id="demo" className="py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 bg-white rounded-2xl border border-success/30 shadow-lg">
            <div className="w-16 h-16 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-success">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {t("demo.success.title")}
            </h3>
            <p className="text-muted leading-relaxed">
              {t("demo.success.desc")}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-primary hover:underline"
            >
              {t("demo.success.another")}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="demo" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                {t("demo.label")}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {t("demo.title")}
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                {t("demo.subtitle")}
              </p>
              <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-success flex-shrink-0">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="p-8 bg-white rounded-2xl border border-border shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
                      {t("demo.name")}
                    </label>
                    <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("demo.namePlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">
                      {t("demo.company")}
                    </label>
                    <input type="text" id="company" name="company" required value={form.company} onChange={handleChange} className="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("demo.companyPlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
                      {t("demo.email")}
                    </label>
                    <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("demo.emailPlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">
                      {t("demo.phone")}
                    </label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" placeholder={t("demo.phonePlaceholder")} />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="company_size" className="block text-sm font-medium text-foreground mb-1.5">
                    {t("demo.companySize")}
                  </label>
                  <select id="company_size" name="company_size" value={form.company_size} onChange={handleChange} className="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white">
                    <option value="">{t("demo.companySizePlaceholder")}</option>
                    {companySizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">
                    {t("demo.message")}
                  </label>
                  <textarea id="message" name="message" rows={3} value={form.message} onChange={handleChange} className="w-full px-4 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none" placeholder={t("demo.messagePlaceholder")} />
                </div>

                {status === "error" && (
                  <div className="mt-4 p-3 bg-danger/10 border border-danger/20 rounded-lg">
                    <p className="text-sm text-danger">{errorMsg}</p>
                  </div>
                )}

                <button type="submit" disabled={status === "loading"} className="mt-6 w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary-dark transition-all shadow-lg shadow-primary/25 disabled:opacity-60 disabled:cursor-not-allowed">
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      {t("demo.submitting")}
                    </>
                  ) : (
                    t("demo.submit")
                  )}
                </button>
                <p className="mt-3 text-xs text-center text-muted">
                  {t("demo.privacy")}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
