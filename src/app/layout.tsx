import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Dev fullstack | Mobile . Web . UI/UX . DevOps",
  description: "Développeur fullstack | Mobile . Web . UI/UX . DevOps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased" suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
