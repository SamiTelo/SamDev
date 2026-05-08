import { HomeView } from "@/src/features/home/home-view";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default:
      "Samuel Tiemtore – Développeur Fullstack Next.js & Nest.js & Flutter",
    template: "%s | Samuel Tiemtore",
  },
  description:
    "Développeur Fullstack spécialisé en Next.js, Flutter et NestJS. Création d’applications web et mobiles modernes, performantes et sécurisées. UI/UX, API robustes, DevOps et solutions digitales sur mesure en Côte d’Ivoire.",
  keywords: [
    "Samuel Tiemtore",
    "développeur fullstack",
    "Next.js",
    "Flutter",
    "NestJS",
    "DevOps",
    "UI/UX",
    "application web",
    "application mobile",
    "API sécurisée",
    "développeur Côte d'Ivoire",
  ],
  authors: [{ name: "Samuel Tiemtore" }],
  creator: "Samuel Tiemtore",
  metadataBase: new URL("https://sam-dev-portfolio-one.vercel.app"),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Samuel Tiemtore – Développeur Fullstack Web & Mobile",
    description:
      "Applications web et mobiles modernes avec Next.js, Flutter et NestJS. Solutions performantes, sécurisées et orientées expérience utilisateur.",
    url: "https://sam-dev-portfolio-one.vercel.app",
    siteName: "Samuel Tiemtore",
    images: [
      {
        url: "https://sam-dev-portfolio-one.vercel.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Portfolio Samuel Tiemtore",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Samuel Tiemtore – Développeur Fullstack",
    description:
      "Création d’applications web et mobiles modernes avec Next.js, Flutter et NestJS.",
    images: ["https://sam-dev-portfolio-one.vercel.app/og-image.svg"],
  },

  alternates: {
    canonical: "https://sam-dev-portfolio-one.vercel.app",
  },
};

export default function Home() {
  return <HomeView />;
}
