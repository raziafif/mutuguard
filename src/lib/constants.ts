/** Base path for links. Empty for Vercel, "/mutuguard" for GitHub Pages. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** When set (e.g. GitHub Pages), form uses Formspree instead of Vercel API. Free, no Deployment Protection. */
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";

/** Official report URLs for fraud statistics sources */
export const REPORT_URLS = {
  cnam: "https://rapport-annuel.assurance-maladie.fr/",
  hcfps: "https://www.vie-publique.fr/rapport/295536-hcfips-lutte-contre-la-fraude-sociale-etat-des-lieux-et-enjeux",
  cdc: "https://www.ccomptes.fr/fr/publications/la-lutte-contre-les-fraudes-aux-prestations-dans-les-branches-prestataires-du-regime",
} as const;
