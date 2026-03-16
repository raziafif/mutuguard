/** Base path for links. Empty for Vercel, "/mutuguard" for GitHub Pages. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** When set (e.g. GitHub Pages), form POSTs to this URL + /api/demo. Use your Vercel URL. */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";
