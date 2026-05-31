export const SeoJsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sam-dev-portfolio-one.vercel.app#person",
        name: "Samuel Tiemtore",
        jobTitle: "Développeur Fullstack",
        url: "https://sam-dev-portfolio-one.vercel.app",
        image: "https://sam-dev-portfolio-one.vercel.app/profil.png",
        sameAs: [
          "https://github.com/SamiTelo",
        ],
        knowsAbout: [
          "Next.js",
          "Flutter",
          "NestJS",
          "DevOps",
          "UI/UX Design",
          "Développement Web",
          "Développement Mobile"
        ],
        worksFor: {
          "@type": "Organization",
          name: "Freelance"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sam-dev-portfolio-one.vercel.app#website",
        name: "Samuel Tiemtore Portfolio",
        url: "https://sam-dev-portfolio-one.vercel.app",
        inLanguage: "fr"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};