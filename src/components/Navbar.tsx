"use client";

import { useState } from "react";
import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { isRoute, type NavLink } from "@/components/nav";

const defaultLinks: NavLink[] = [
  { label: "How It Works", href: "#process", secondary: true },
  { label: "How to Start", href: "#offer", secondary: true },
  { label: "Airtable Systems", href: "/airtable" },
  { label: "For Contractors", href: "/construction" },
];

export default function Navbar({
  links = defaultLinks,
  ctaLabel = "Book a Call",
  ctaHref = "#book",
}: {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  const navLinks = links;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 font-heading text-xl font-bold tracking-tight text-foreground"
          >
            <LogoMark className="h-7 w-7 shrink-0" />
            <span>Visionary<span className="text-accent-glow">Funnels</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) =>
              isRoute(link.href) ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap text-sm font-medium text-accent-light transition-colors hover:text-accent-glow"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap text-sm font-medium text-gray hover:text-foreground transition-colors ${
                    link.secondary ? "hidden lg:inline" : ""
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={ctaHref}
              className="btn-primary rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-2 pt-4">
            {navLinks.map((link) =>
              isRoute(link.href) ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-accent-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label} →
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-gray hover:text-foreground"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={ctaHref}
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-3 inline-block rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
