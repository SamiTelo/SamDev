"use client";
import Image from "next/image";
import { Github } from "lucide-react";
import { Title } from "./title";
import Marquee from "react-fast-marquee";

const projects = [
  {
    id: 1,
    title: "Site vitrine Webshift",
    description:
      "WebShift, un site web moderne et responsive dédié au marketing digital, à l’acquisition et aux services de branding en ligne.",
    image: "/assets/projects/web-shift.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/tailwindcss-icon.svg",
      "/assets/skills/motion-icon.svg",
      "/assets/skills/github-icon.svg",
      "/assets/skills/git-icon.svg",
      "/assets/skills/typescript-icon.svg",
    ],
    demoUrl: "https://site-vitrine-web-shift.vercel.app/",
    githubUrl: "https://github.com/SamiTelo/Site-vitrine-WebShift",
  },
  {
    id: 2,
    title: "Football Club",
    description:
      "Dashboard fullstack pour la gestion d’un club de football. Construit avec Next.js et connecté à une API backend NestJS + Prisma.",
    image: "/assets/projects/dashboard-main.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/tailwindcss-icon.svg",
      "/assets/skills/typescript-icon.svg",
      "/assets/skills/nestjs.svg",
      "/assets/skills/nodejs-icon.svg",
      "/assets/skills/prisma-icon.svg",
      "/assets/skills/github-icon.svg",
      "/assets/skills/git-icon.svg",
      "/assets/skills/postgresql-icon.svg",
    ],
    demoUrl: "https://dashboard-football-club.vercel.app",
    githubUrl: "https://github.com/SamiTelo/dashboard-football-club",
  },
  {
    id: 3,
    title: "API backend | NestJS . Prisma . Auth . CRUD Club de football",
    description:
      "API backend complète avec NestJS, Prisma et PostgreSQL, sécurisée par JWT (Refresh Tokens, rôles & permissions, Cookies HttpOnly), incluant des modules métier (Players, Teams, Positions) ainsi que le monitoring (Prometheus, Grafana) et le tracking d’erreurs (Sentry).",
    image: "/assets/projects/swagger-api.png",
    skills: [
      "/assets/skills/typescript-icon.svg",
      "/assets/skills/nestjs.svg",
      "/assets/skills/nodejs-icon.svg",
      "/assets/skills/prisma-icon.svg",
      "/assets/skills/postgresql-icon.svg",
      "/assets/skills/docker-icon.svg",
      "/assets/skills/swagger-icon.svg",
      "/assets/skills/postgresql-icon.svg",
      "/assets/skills/github-icon.svg",
      "/assets/skills/git-icon.svg",
      "/assets/skills/postman-icon.svg",
    ],
    demoUrl: "https://api-football-gfpz.onrender.com/docs",
    githubUrl: "https://github.com/SamiTelo/API-Football",
  },
  {
    id: 4,
    title: "Mon portfolio",
    description:
      "Ce portfolio présente mes compétences, mes projets et mon univers en tant que développeur Fullstack.",
    image: "/assets/projects/portfolio.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/tailwindcss-icon.svg",
      "/assets/skills/motion-icon.svg",
      "/assets/skills/typescript-icon.svg",
      "/assets/skills/github-icon.svg",
      "/assets/skills/git-icon.svg",
    ],
    demoUrl: "https://api-football-gfpz.onrender.com/docs",
    githubUrl: "https://github.com/SamiTelo/API-Football",
  },
];

export const ProjectSection = () => {
  return (
    <section id="project" className="relative overflow-hidden pt-38 pb-20 md:pb-30 px-6 sm:px-10 min-h-screen">
      
      {/* Title */}
      <Title
        title="Portfolio"
        heading="Mes Récents Projets"
        text="Explorez mes projets, chacun reflétant ma passion pour le développement, le design et l'optimisation de solutions performantes."
      />

      {/* IMAGE BG TOP LEFT */}
      <div className="absolute top-10 md:top-30 -left-50 md:-left-30 -z-10 pointer-events-none">
        <Image
          src="/assets/project-bg.svg"
          alt=""
          width={600}
          height={600}
          className="w-75 md:w-112.5 md:h-50 h-30 animate-pulse"
        />
      </div>

      {/* Marquee Wrapper */}
      <div className="relative mt-28 md:mt-38 max-w-6xl mx-auto">
        
        {/* Gradients */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-40 bg-linear-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-linear-to-l from-white to-transparent z-10" />

        <Marquee
          pauseOnHover={true}
          speed={90}
          gradient={false}
          className="flex items-stretch"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-4xl px-4 pt-4 pb-8 md:pb-10 bg-[#F6F9FC] border border-gray-100 w-87.5 md:w-125 mx-6"
            >
              {/* Image */}
              <div className="relative h-54 sm:h-58 md:h-74 w-full overflow-hidden rounded-xl ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="mt-8 md:mt-11 space-y-4 px-2">
                <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500 h-10 line-clamp-2">
                  {project.description}
                </p>

                {/* Skills empilés */}
                <div className="flex items-center -space-x-3 mt-6">
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

                <div className="flex items-center justify-between pt-2 md:pt-4 gap-6 md:gap-14">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 md:py-3 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-colors"
                  >
                    Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 md:p-3.5 rounded-full border bg-white border-gray-100 text-orange-500 hover:text-black transition-colors"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};