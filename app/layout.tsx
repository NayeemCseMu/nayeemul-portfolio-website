import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { site } from "@/data/site";

// Using the system font stack (defined in globals.css) instead of next/font/google.
// This keeps the build fully self-contained with no network dependency on Google
// Fonts, which matters for reliability in CI/offline environments while still
// rendering a clean, modern, high-contrast typeface on every platform.

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Software Engineer | Data Analytics | Cloud Computing`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Nayeemul Islam Durjoy",
    "Software Engineer",
    "Data Analyst",
    "Data Analytics",
    "Cloud Computing",
    "Data Engineering",
    "Flutter Developer",
    "Business Intelligence",
    "Python",
    "SQL",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Software Engineer | Data Analytics | Cloud Computing`,
    description: site.description,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Software Engineer | Data Analytics | Cloud Computing`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Software Engineer",
    description: site.description,
    url: site.url,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Ontario",
      addressCountry: "CA",
    },
    sameAs: [site.github, site.linkedin],
    knowsAbout: [
      "Software Engineering",
      "Flutter Development",
      "Data Analytics",
      "Cloud Computing",
      "Data Engineering",
      "Python",
      "SQL",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Laurentian University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Metropolitan University",
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
