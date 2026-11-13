// The site may live under a sub-path (GitHub Pages: /Test-base). Every internal link goes through u().
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const u = (path: string) => base + path;

export const stripBase = (pathname: string) =>
  base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
