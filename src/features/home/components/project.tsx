import React from "react";
import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Site vitrine Webshift",
    description:
      "Capacité à maîtriser rapidement de nouvelles technologies et à m'adapter aux évolutions du projet.",
    image: "/assets/home.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/nextjs.svg",
    ],
  },
  {
    id: 2,
    title: "Dashboard FootballClub",
    description:
      "Capacité à maîtriser rapidement de nouvelles technologies et à m'adapter aux évolutions du projet.",
    image: "/assets/dashboard-main.png",
    skills: [
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/nextjs.svg",
       "/assets/skills/react-icon.svg",
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
    ],
  },
  {
    id: 3,
    title: "FootballClub login page",
    description:
      "Capacité à maîtriser rapidement de nouvelles technologies et à m'adapter aux évolutions du projet.",
    image: "/assets/login.png",
    skills: [
      "/assets/skills/react-icon.svg",
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
      "/assets/skills/react-icon.svg",
      "/assets/skills/nextjs.svg",
      "/assets/skills/figma.svg",
    ],
  },
];

export const ProjectSection = () => {
  return (
    <section className="py-20 px-6 sm:px-10 min-h-screen">
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
            <div className="mt-12 space-y-4 px-2">
              <h3 className="text-xl font-bold text-gray-900">
                {project.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                {project.description}
              </p>

            
              {/* Skills empilés */}
              <div className="flex items-center -space-x-3 mt-4">
                {project.skills.slice(0, 5).map((skill, index) => (
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
                <button className="px-10 sm:px-40 md:px-30 py-2.5 rounded-full text-sm font-semibold bg-black text-white">
                  Demo
                </button>

                <div className="p-3 rounded-full border bg-white border-white text-orange-500">
                  <Github size={20} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
