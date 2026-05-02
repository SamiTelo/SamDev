import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";
import { Title } from "./title";

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
];

export const ProjectSection = () => {
  return (
    <section className="relative overflow-hidden pt-38 pb-20 md:pb-30 px-6 sm:px-10 min-h-screen">
      
      {/* Title */}
      <Title
        title="Portfolio"
        heading="Mes Récents Projets"
        text="Explorez mes projets, chacun reflétant ma passion pour le
          développement, le design et l'optimisation de solutions
          performantes."
      />

      {/* IMAGE BG TOP LEFT */}
            <div className="absolute top-10 md:top-30 -left-50 md:-left-30 -z-10 pointer-events-none">
              <Image
                src="/assets/project-bg.svg"
                alt=""
                width={600}
                height={600}
                className="`w-75 md:w-112.5 md:h-50 h-30 animate-pulse"
              />
            </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-28 md:mt-38 px-0 md:px-27">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-4xl px-4 pt-4 pb-8 md:pb-10 bg-[#F6F9FC] border border-gray-100"
          >
            {/* Image */}
            <div className="relative h-54 md:h-64 w-full overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-8 md:mt-11 space-y-4 px-2">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
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

              <div className="flex items-center justify-between pt-2 md:pt-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-20 sm:px-40 md:px-38 py-3.5 rounded-full text-sm font-semibold bg-black text-white"
                >
                  Demo
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full border bg-white border-white text-orange-500  hover:text-black"
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
