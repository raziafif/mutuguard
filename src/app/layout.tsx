import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MutuGuard — Détection de fraude pour l'assurance santé",
  description:
    "MutuGuard aide les mutuelles à détecter les remboursements suspects grâce à l'IA et à la vérification en temps réel des adhérents.",
  keywords: [
    "détection de fraude",
    "assurance santé",
    "mutuelle",
    "IA",
    "fraude remboursement",
    "conformité",
    "fraud detection",
    "health insurance",
    "health insurance fraud",
    "mutuelle fraude santé",
    "insurance fraud detection",
    "fraude assurance maladie",
    "CNAM fraude",
    "détection fraude temps réel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
