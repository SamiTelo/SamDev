import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dev fullstack | Mobile . Web . UI/UX . DevOps",
  description: "Développeur fullstack | Mobile . Web . UI/UX . DevOps",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased min-h-screen" suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
