import Image from "next/image";

const features = [
  {
    title: "Polyvalence",
    description:
      "Capacité à gérer des projets complexes avec une approche créative et technique.",
    icon: "/assets/icon-1.svg",
  },
  {
    title: "Esprit collaboratif",
    description:
      "Capacité à travailler efficacement en équipe et à partager clairement mes idées techniques.",
    icon: "/assets/icon-2.svg",
  },
  {
    title: "Rigueur",
    description: "Capacité à écrire un code propre, maintenable et performant.",
    icon: "/assets/icon-3.svg",
  },
  {
    title: "Adaptabilité",
    description:
      "Capacité à maîtriser rapidement de nouvelles technologies et à m'adapter aux évolutions du projet.",
    icon: "/assets/icon-4.svg",
  },
];

export const AtoutSection = () => {
  return (
    <section className="py-16 px-6 sm:px-10 bg-slate-50 bg-cover bg-center bg-[url('/assets/atout-bg.webp')]">
      <div className="max-w-5xl mx-auto text-center">

        {/*-------------------------------------------
            Title
        -----------------------------------------*/}
        <div className="text-center mb-16">
          <span className="text-[#FF5722] font-medium text-sm md:text-lg  tracking-wider">
            Atouts
          </span>
          <h2 className=" text-3xl md:text-5xl font-bold text-slate-900 mt-6 md:mt-4 mb-6">
            Ce Qui Fait la Différence
          </h2>
          <p className="max-w-2xl mx-auto text-slate-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
            Mes atouts me permettent de proposer des solutions adaptées et un travail de qualité, sur web comme sur mobile.
          </p>
        </div>

        {/*----------------------------------------------
               Main Content Grid 
        ----------------------------------------------------*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 mt-24 md:mt-32 px-0 sm:px-12">
          {/* ----------------------------------------
               BLOC cards
             ----------------------------------------------- */}
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white px-12 pb-11 md:pb-16 pt-12 rounded-xl border border-gray-100 flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
            >
              <div className="relative w-18 h-18 md:w-22 md:h-22 mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
              <p className="text-gray-500  text-sm sm:text-[16px] md:text-[16px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bouton Contact */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 md:text-[16px] text-sm text-white px-8 py-3 mt-10 rounded-full font-semibold  bg-[#FF5722] hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-black/50"
        >
          Contactez-moi
        </a>
      </div>
    </section>
  );
};
