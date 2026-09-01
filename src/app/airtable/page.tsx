import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { NavLink } from "@/components/nav";
import Hero from "@/components/airtable/Hero";
import Services from "@/components/airtable/Services";
import Benefits from "@/components/airtable/Benefits";
import Process from "@/components/airtable/Process";
import Testimonials, { testimonials } from "@/components/airtable/Testimonials";
import FinalCTA from "@/components/airtable/FinalCTA";
import Offer from "@/components/Offer";
import Booking from "@/components/Booking";

const PAGE_URL = "https://visionaryfunnels.com/airtable";
const TITLE = "Custom Airtable Systems & Workflow Automation";
const DESCRIPTION =
  "Custom Airtable systems, dashboards, and AI workflows that replace spreadsheets and manual handoffs — so your operations run without you chasing them.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "VisionaryFunnels",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const navLinks: NavLink[] = [
  { label: "What We Build", href: "#services" },
  { label: "Why It Works", href: "#benefits", secondary: true },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials", secondary: true },
  { label: "How to Start", href: "#offer" },
  { label: "For Contractors", href: "/construction" },
];

const footerLinks: NavLink[] = [
  { label: "What We Build", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "AI Operating Systems", href: "/" },
  { label: "For Contractors", href: "/construction" },
  { label: "Book a Call", href: "#book" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Custom Airtable Systems & Workflow Automation",
      serviceType: "Airtable consulting, workflow automation and AI systems",
      description: DESCRIPTION,
      url: PAGE_URL,
      provider: {
        "@type": "Organization",
        name: "VisionaryFunnels",
        url: "https://visionaryfunnels.com",
        email: "support@visionaryfunnels.com",
      },
      /* Reviews carry no rating value — none was ever collected, and
         inventing one to win a star snippet is not worth the exposure. */
      review: testimonials.map((t) => ({
        "@type": "Review",
        reviewBody: t.quote,
        author: { "@type": "Person", name: t.name },
      })),
    },
  ],
};

export default function AirtablePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar links={navLinks} ctaLabel="Book a Free Audit" />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Process />
        <Testimonials />
        <Offer />
        <FinalCTA />
        <Booking source="airtable" />
      </main>
      <Footer
        links={footerLinks}
        blurb="Custom Airtable systems, automations, and dashboards — built for you, not handed to you as a template."
      />
    </>
  );
}
