import Link from "next/link";
import LogoMark from "@/components/LogoMark";
import { isRoute, type NavLink } from "@/components/nav";

const defaultLinks: NavLink[] = [
  { label: "How It Works", href: "#process" },
  { label: "How to Start", href: "#offer" },
  { label: "Airtable Systems", href: "/airtable" },
  { label: "For Contractors", href: "/construction" },
  { label: "Book a Call", href: "#book" },
];

export default function Footer({
  links = defaultLinks,
  blurb = "AI operating systems for growing businesses. We build the infrastructure so your team runs on intelligence, not guesswork.",
}: {
  links?: NavLink[];
  blurb?: string;
}) {
  return (
    <footer className="bg-surface-2 border-t border-border py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="flex items-center gap-2.5 font-heading text-xl font-bold text-white mb-3">
              <LogoMark className="h-6 w-6 shrink-0" />
              <span>Visionary<span className="text-accent-light">Funnels</span></span>
            </p>
            <p className="text-gray-light text-sm leading-relaxed">{blurb}</p>
          </div>

          {/* Links */}
          <div>
            <p className="font-heading font-semibold text-white text-sm mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  {isRoute(link.href) ? (
                    <Link
                      href={link.href}
                      className="text-gray-light text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-light text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-semibold text-white text-sm mb-4">
              Get in Touch
            </p>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>
                <a
                  href="mailto:support@visionaryfunnels.com"
                  className="hover:text-white transition-colors"
                >
                  support@visionaryfunnels.com
                </a>
              </li>
              <li>
                <a
                  href="https://visionaryfunnels.com"
                  className="hover:text-white transition-colors"
                >
                  visionaryfunnels.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/arjo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-light/60 text-xs">
            &copy; {new Date().getFullYear()} VisionaryFunnels. All rights
            reserved.
          </p>
          <p className="text-gray-light/40 text-xs">
            Based in Medellin, Colombia. Serving businesses worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
