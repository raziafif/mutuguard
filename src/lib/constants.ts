/** Base path for links. Empty for Vercel, "/mutuguard" for GitHub Pages. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** When set (e.g. GitHub Pages), form uses Formspree instead of Vercel API. Free, no Deployment Protection. */
export const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "";
