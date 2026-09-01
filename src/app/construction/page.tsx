import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { NavLink } from "@/components/nav";
import Hero from "@/components/construction/Hero";
import Problem from "@/components/construction/Problem";
import Bridge from "@/components/construction/Bridge";
import Tracks from "@/components/construction/Tracks";
import Rules from "@/components/construction/Rules";
import Proof from "@/components/construction/Proof";
import Offer from "@/components/Offer";
import Fit from "@/components/construction/Fit";
import Booking from "@/components/Booking";
import Faq, { faqs } from "@/components/construction/Faq";
import FinalCTA from "@/components/construction/FinalCTA";

const PAGE_URL = "https://visionaryfunnels.com/construction";
const TITLE = "Site Tracking That Runs on Your Team's Group Chat";
const DESCRIPTION =
  "An AI that sits in your site chats and turns ordinary conversation into a tracked record — issues, materials, deliveries, RFIs. No new app for the field.";

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
  { label: "How It Works", href: "#bridge" },
  { label: "What It Tracks", href: "#tracks" },
  { label: "How to Start", href: "#offer" },
  { label: "FAQ", href: "#faq" },
];

const footerLinks: NavLink[] = [
  { label: "How It Works", href: "#bridge" },
  { label: "What It Tracks", href: "#tracks" },
  { label: "How to Start", href: "#offer" },
  { label: "AI Operating Systems", href: "/" },
  { label: "Airtable Systems", href: "/airtable" },
  { label: "Book a Call", href: "#book" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Construction Site Operating System",
      serviceType: "AI project tracking for general contractors",
      description: DESCRIPTION,
      url: PAGE_URL,
      areaServed: { "@type": "Country", name: "Philippines" },
      audience: {
        "@type": "BusinessAudience",
        name: "General contractors and civil works firms",
      },
      provider: {
        "@type": "Organization",
        name: "VisionaryFunnels",
        url: "https://visionaryfunnels.com",
        email: "support@visionaryfunnels.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function ConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar links={navLinks} ctaLabel="Book a Walkthrough" />
      <main>
        <Hero />
        <Problem />
        <Bridge />
        <Tracks />
        <Rules />
        <Proof />
        <Offer />
        <Fit />
        <Faq />
        <FinalCTA />
        <Booking source="construction" />
      </main>
      <Footer
        links={footerLinks}
        blurb="The operating system between the office and the job site. Your crew keeps chatting; the work ends up tracked."
      />
    </>
  );
}
