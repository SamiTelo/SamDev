import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SeoJsonLd } from "@/components/SeoJsonLd";

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
      <body className="font-sans antialiased min-h-screen" suppressHydrationWarning>
        {children}
        <SeoJsonLd />
      </body>
    </html>
  );
}