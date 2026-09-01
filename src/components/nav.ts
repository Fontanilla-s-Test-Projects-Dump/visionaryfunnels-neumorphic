/* Shared by Navbar (client) and Footer (server) — must stay free of
   "use client", or the server can't call isRoute() at render time. */

export type NavLink = {
  label: string;
  href: string;
  /** Hidden between md and lg, where the full row doesn't fit. Always in the mobile menu. */
  secondary?: boolean;
};

/** Route links must go through next/link; anchors and external URLs stay plain. */
export function isRoute(href: string) {
  return href.startsWith("/");
}
