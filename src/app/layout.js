import { Work_Sans } from "next/font/google";
import "./globals.css";
import AiBot from "@/components/ai/AiBoat";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://quana.ai";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Quana AI — Next-Gen Personal AI Platform",
    template: "%s | Quana AI",
  },
  description:
    "Build, customize, and deploy ultra-personalized AI experiences. Quana empowers creators, businesses, and individuals with intelligent, tailored AI identity.",
  keywords: [
    "Quana AI",
    "Personal AI",
    "AI Platform",
    "Artificial Intelligence",
    "Custom AI Assistant",
    "AI Persona",
    "Vincular AI",
    "AI Technology",
    "Generative AI",
  ],
  authors: [{ name: "Quana AI Team", url: siteUrl }],
  creator: "Quana AI",
  publisher: "Quana AI Inc.",
  category: "Technology",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Quana AI — Next-Gen Personal AI Platform",
    description:
      "Create, customize, and share your own AI experience. Built for scale, designed for ultimate precision.",
    url: siteUrl,
    siteName: "Quana AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Quana AI — Next-Gen Personal AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quana AI — Next-Gen Personal AI Platform",
    description:
      "Create, customize, and share your own AI experience. Built for scale, designed for ultimate precision.",
    creator: "@quana_ai",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Quana AI",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      sameAs: [
        "https://twitter.com/quana_ai",
        "https://github.com/quana-ai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Quana AI",
      description: "The future of personal AI experiences.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      name: "Quana AI Platform",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "INR",
      },
      description: "Platform for creating and deploying custom personal AI experiences.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans selection:bg-blue-600/30 flex flex-col bg-[#030303] text-foreground">
        {children}
        <AiBot />
      </body>
    </html>
  );
}
