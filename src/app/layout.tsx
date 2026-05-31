import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import CursorProvider from "@/components/cursor/CursorProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Samuel Tiemtore – Développeur Fullstack Web & Mobile",
  description:
    "Développeur fullstack spécialisé en Next.js, Flutter et NestJS. Création d'applications web et mobiles modernes, UI/UX, API et DevOps.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="Ayp9qruQoBRawcPXXuji553u5itMff2mWlJiF1x3hHE" />

        {/* Bing Webmaster verification */}
        <meta name="msvalidate.01" content="E461949A48CF2394C4724BA68ECA0499" />
      </head>

      <body
        className="font-sans antialiased min-h-screen"
        suppressHydrationWarning
      >
        <CursorProvider/>
        {children}
        <SeoJsonLd />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}