import { Server, Cpu, Waypoints, BarChart } from "lucide-react";
import Image from "next/image";

const skills = [
  { name: "Next.js", icon: "/assets/skills/nextjs.svg" },
  { name: "React.js", icon: "/assets/skills/react-icon.svg" },
  { name: "Html", icon: "/assets/skills/html-icon.svg" },
  { name: "Css", icon: "/assets/skills/css-icon.webp" },
  { name: "JavaScript", icon: "/assets/skills/javascript.svg" },
  { name: "Tailwindcss", icon: "/assets/skills/tailwindcss-icon.svg" },
  { name: "Framer motion", icon: "/assets/skills/motion-icon.svg" },
  { name: "Figma", icon: "/assets/skills/figma.svg" },
  { name: "Flutter", icon: "/assets/skills/flutter-icon.svg" },
  { name: "Nest.js", icon: "/assets/skills/nestjs.svg" },
  { name: "TypeScript", icon: "/assets/skills/typescript-icon.svg" },
  { name: "Node.js", icon: "/assets/skills/nodejs-icon.svg" },
  { name: "PHP", icon: "/assets/skills/php.svg" },
  { name: "Mysql", icon: "/assets/skills/mysql-icon.svg" },
  { name: "postgreSQL", icon: "/assets/skills/postgresql-icon.svg" },
  { name: "Prisma", icon: "/assets/skills/prisma-icon.svg" },
  { name: "Github", icon: "/assets/skills/github-icon.svg" },
  { name: "Git", icon: "/assets/skills/git-icon.svg" },
  { name: "Postman", icon: "/assets/skills/postman-icon.svg" },
  { name: "Swagger", icon: "/assets/skills/swagger-icon.svg" },
  { name: "Docker", icon: "/assets/skills/docker-icon.svg" },
  { name: "Serveur", icon: <Server className="w-10 h-10 text-gray-700" /> },
  { name: "Rest API", icon: <Waypoints className="w-10 h-10 text-gray-700" /> },
  {
    name: "Monitoring",
    icon: <BarChart className="w-10 h-10 text-gray-700" />,
  },
  {
    name: "Intelligence Artificielle",
    icon: <Cpu className="w-10 h-10 text-gray-700" />,
  },
];

export const SkillSection = () => {
  return (
    <section className="py-0 sm:py-18 md:py-30 bg-white">
      <div className="container mx-auto px-6 sm:px-10">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-[#FF5722] font-medium text-sm md:text-lg  tracking-wider">
            Skills
          </span>
          <h2 className=" text-3xl md:text-5xl font-bold text-slate-900 mt-6 md:mt-4 mb-6">
            Mes technologies
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
            Un ensemble de compétences techniques et créatives me permettant de
            concevoir des solutions web et mobiles modernes, responsives et
            performantes.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mt-30 sm:mt-38 md:mt-38">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-[#F6F9FC] hover:shadow-md hover:bg-indigo-50 transition-shadow duration-300 border border-slate-100"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 flex items-center justify-center mb-4">
                {typeof skill.icon === "string" ? (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  skill.icon
                )}
              </div>
              <span className="text-gray-800 text-sm sm:text-[16px] md:text-[16px] text-center mt-2">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
