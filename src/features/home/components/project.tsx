import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Site vitrine Webshift",
    description:
      "WebShift, un site web moderne et responsive dédié au marketing digital, à l’acquisition et aux services de branding en ligne.",
    image: "/assets/web-shift.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/tailwindcss-icon.svg",
      "/assets/skills/motion-icon.svg",
      "/assets/skills/typescript-icon.svg",
    ],
    demoUrl: "https://site-vitrine-web-shift.vercel.app/",
    githubUrl: "https://github.com/SamiTelo/Site-vitrine-WebShift",
  },
  {
    id: 2,
    title: "Sass Football Club",
    description:
      "Dashboard fullstack pour la gestion d’un club de football. Construit avec Next.js et connecté à une API backend NestJS + Prisma.",
    image: "/assets/dashboard-main.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/tailwindcss-icon.svg",
      "/assets/skills/typescript-icon.svg",
      "/assets/skills/nestjs.svg",
      "/assets/skills/nodejs-icon.svg",
      "/assets/skills/prisma-icon.svg",
      "/assets/skills/postgresql-icon.svg",
    ],
    demoUrl: "https://dashboard-football-club.vercel.app",
    githubUrl: "https://github.com/SamiTelo/dashboard-football-club",
  },
  {
    id: 3,
    title: "API service gestion club football",
    description:
      "API backend sécurisée (NestJS, Prisma, PostgreSQL) avec JWT et gestion des rôles, incluant modules métier, monitoring et suivi d’erreurs.",
    image: "/assets/swagger-api.png",
    skills: [
      "/assets/skills/typescript-icon.svg",
      "/assets/skills/nestjs.svg",
      "/assets/skills/nodejs-icon.svg",
      "/assets/skills/prisma-icon.svg",
      "/assets/skills/postgresql-icon.svg",
      "/assets/skills/swagger-icon.svg",
      "/assets/skills/docker-icon.svg",
    ],
    demoUrl: "https://api-football-gfpz.onrender.com/docs",
    githubUrl: "https://github.com/SamiTelo/API-Football",
  },
];

export const ProjectSection = () => {
  return (
    <section className="py-38 px-6 sm:px-10 min-h-screen">
      {/* Title */}
      <div className="text-center mb-16">
        <span className="text-[#FF5722] font-medium text-sm md:text-lg tracking-wider">
          Portfolio
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-6 md:mt-4 mb-6">
          Mes Récents Projets
        </h2>

        <p className="max-w-2xl mx-auto text-slate-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
          Explorez mes projets, chacun reflétant ma passion pour le
          développement, le design et l&apos;optimisation de solutions
          performantes.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-36 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-4xl px-4 pt-4 pb-10 bg-[#F6F9FC] border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-11 space-y-4 px-2">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                {project.description}
              </p>

              {/* Skills empilés */}
              <div className="flex items-center -space-x-3 mt-5">
                {project.skills.slice(0, 11).map((skill, index) => (
                  <div
                    key={index}
                    className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white bg-[#F6F9FC]"
                    style={{ zIndex: project.skills.length - index }}
                  >
                    <Image
                      src={skill}
                      alt="Skill icon"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 sm:px-40 md:px-30 py-2.5 rounded-full text-sm font-semibold bg-black text-white"
                >
                  Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border bg-white border-white text-orange-500"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
