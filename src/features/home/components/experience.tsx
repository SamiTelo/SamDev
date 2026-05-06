"use client";
import React from "react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = [
  {
    title: "Développeur fullstack",
    period: "Avr 2025 - présent",
    company: "Freelance",
    description:
      "création d’applications web responsive et mobiles modernes, performantes et adaptées aux besoins réels.",
    icon: "/assets/mobile-icon.svg",
  },
  {
    title: "Développeur web",
    period: "Dec 2024 - mars 2025",
    company: "2ets",
    description: [
      "Contribution à la maintenance et évolution de projet existants.",
      "Initiation aux méthodes de travail collaboratif en entreprise .",
      "Mise en place de site vitrine.",
    ],
    icon: "/assets/web-icon.svg",
  },
  {
    title: "Développeur mobile",
    period: "Nov 2023 - fev 2024",
    company: "Freelance",
    description:
      "Mise en place d'un système de suivi des étudiants dans leur voiture scolaire et leur fiabilité",
    icon: "/assets/mobile-icon.svg",
  },
  {
    title: "Dev web fullstack (stage)",
    period: "janv 2023 - mai 2023",
    company: "D.I.C.I",
    description: [
      "Mise en place d'un site web de gestion de produits.",
      "Initiation à la base de données.",
      "Installation de logiciels, configuration machine et système.",
    ],
    icon: "/assets/web-icon.svg",
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="pb-36 sm:pb-40 md:pb-40 pt-22 sm:pt-40 md:pt-40 px-6 bg-cover bg-center bg-[url('/assets/bg-project.png')]">
      {/*-------------------------------------------------------
         Main Content Grid
    --------------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28 md:gap-12 items-center">
        {/*-------------------------------------------
           Bloc left
        ----------------------------------------*/}
        <div className="space-y-6 -mt-10 md:-mt-32 px-6 text-center sm:text-left md:text-left">
          <span className="text-[#FF5722] font-medium text-sm md:text-lg  tracking-wider">
            A propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight  mt-6 md:mt-4 mb-6">
            Mes Expériences <br /> Professionnels
          </h2>
          <p className="text-slate-500 w-fit  sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
            Voici un aperçu de mes expériences, illustrant mon savoir-faire et
            ma capacité à mener des projets à succès.
          </p>
          <button className="bg-[#FF5722] text-white md:text-[16px] text-sm mt-4 px-8 py-3 rounded-full font-semibold hover:bg-black shadow-lg shadow-orange-200  hover:shadow-black/50 transition-all duration-300 transform hover:scale-105">
            Mon CV
          </button>
        </div>

        {/*-----------------------------------------------
           Bloc right
        ------------------------------------------------------*/}

        <ScrollArea className="h-96 md:h-116">
          <div className="space-y-6 sm:px-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white px-8 pt-10 pb-12 md:pt-8 md:pb-8 mt-3 mb-8 rounded-xl flex flex-col sm:flex-row gap-6  items-start  border border-white 
  hover:border-[#f8774f]
  hover:shadow-[0_0_20px_#f8774f]
  transition duration-300"
              >
                {/* Icon image */}
                <div className="p-4 rounded-full shrink-0 relative w-18 h-18">
                  <Image
                    src={exp.icon}
                    alt={exp.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
                    <span className="text-slate-500">{exp.period}</span>
                    <span className="text-[#FF5722] font-bold">
                      • {exp.company}
                    </span>
                  </div>

                  {/* Description */}
                  {Array.isArray(exp.description) ? (
                    <ul className="text-slate-400 text-sm space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};
