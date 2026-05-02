import Image from "next/image";
import { Title } from "./title";

const skills = [
  {
    title: "Développement web",
    description:
      "Création de sites web responsifs et performants avec les dernières technologies.",
    icon: "/assets/web.svg",
    color: "bg-emerald-50",
    dotColor: "bg-emerald-400",
  },
  {
    title: "Développement mobile",
    description:
      "Applications mobiles intuitives et adaptées à vos besoins spécifiques.",
    icon: "/assets/mobile.svg",
    color: "bg-indigo-50",
    dotColor: "bg-indigo-400",
  },
  {
    title: "Design UI/UX",
    description:
      "Interfaces utilisateur élégantes et expériences utilisateur optimisées.",
    icon: "/assets/design.svg",
    color: "bg-orange-50",
    dotColor: "bg-orange-400",
  },
];

export const CompetenceSection = () => {
  return (
    <section className="pt-0 md:sm:pt-20 sm:pt-20 pb-16 sm:pb-30 md:pb-48 px-6 sm:px-10 bg-white">

      {/* Title */}
      <Title
        title="Expertise"
        heading="Compétences Full-Stack"
        text="Je combine des compétences techniques avancées avec une approche
          créative pour offrir des solutions numériques complètes."
      />

      {/*----------------------------------------------
               Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 pt-10">
        {/* ----------------------------------------
               BLOC CARD
             ----------------------------------------------- */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Conteneur l'icône + (Blob) */}
            <div className="relative w-48 h-48 mb-2 sm:mb-8 md:mb-8 flex items-center justify-center">
              {/* Le fond (Blob effect) */}
              <div
                className={`absolute inset-0 ${skill.color} rounded-full opacity-60 blur-2xl group-hover:scale-110 transition-transform duration-500`}
              />

              <div className="relative z-10 w-36 h-36 sm:w-42 sm:h-42  md:w-42 md:h-42">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Petits points décoratifs autour de l'image */}
              <div
                className={`absolute top-4 left-4 w-3 h-3 rounded-full ${skill.dotColor} opacity-40 animate-bounce duration-3000`}
              />
              <div
                className={`absolute bottom-8 right-6 w-2 h-2 rounded-full ${skill.dotColor} opacity-60 animate-bounce duration-3000`}
              />
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-4">
              {skill.title}
            </h3>
            <p className="text-slate-500 leading-relaxed sm:text-[16px] md:text-[16px] px-6 md:px-6 text-sm ">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
