import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://sam-dev-portfolio-one.vercel.app";

  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: "monthly",
      priority: "1",
    },
    {
      loc: `${baseUrl}/projects`,
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      loc: `${baseUrl}/contact`,
      changefreq: "yearly",
      priority: "0.6",
    },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}