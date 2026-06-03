import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";

import { SeoJsonLd } from "@/components/seo/SeoJsonLd";
import CursorProvider from "@/components/cursor/CursorProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Clarity from "@/components/analytics/Clarity";

export const metadata: Metadata = {
  title: "Samuel Tiemtore – Développeur Fullstack Web & Mobile",
  description:
    "Développeur fullstack spécialisé en Next.js, Flutter et NestJS. Création d'applications web et mobiles modernes, UI/UX et DevOps."
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = (
    await import(`../../../messages/${locale}.json`)
  ).default;

  return (
    <html lang={locale}>
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="Ayp9qruQoBRawcPXXuji553u5itMff2mWlJiF1x3hHE"
        />
         {/* Bing Webmaster verification */}
        <meta
          name="msvalidate.01"
          content="E461949A48CF2394C4724BA68ECA0499"
        />
        <Clarity />
      </head>

      <body
        className="font-sans antialiased min-h-screen"
        suppressHydrationWarning
      >
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
        >
          <CursorProvider />

          {children}

          <SeoJsonLd />
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics gaId="G-DMT9YD9GER" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}