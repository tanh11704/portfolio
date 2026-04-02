/** `usePathname()` may include trailing slashes or search/hash fragments in edge cases. */
export function normalizeRoutePath(path: string) {
  if (!path) return "/";
  const base = path.split("#")[0]?.split("?")[0] ?? path;
  const trimmed = base.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/** True if the current location is this route or a nested segment (e.g. /blog matches /blog/post). */
export function routePathMatches(pathname: string, href: string) {
  const p = normalizeRoutePath(pathname);
  const h = normalizeRoutePath(href);
  if (h === "/") return p === "/";
  return p === h || p.startsWith(`${h}/`);
}
