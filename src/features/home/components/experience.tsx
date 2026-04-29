"use client";
import React from 'react';
import { Globe, Smartphone, LucideIcon } from 'lucide-react';

// Type pour nos données d'expérience
interface Experience {
  id: number;
  title: string;
  period: string;
  company: string;
  description: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  borderColor?: string; // Optionnel pour la mise en avant
}

// Mock Data
const EXPERIENCES_DATA: Experience[] = [
  {
    id: 1,
    title: "Dev mobile ",
    period: "Nov 2023 - fev 2024",
    company: "Freelance",
    description: "Mise en place d'un système de suivi des étudiants dans leur voiture scolaire et leur fiabilité",
    icon: Globe,
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 2,
    title: "Dev web fullstack (stage)",
    period: "janv 2023 - mai 2023",
    company: "D.I.C.I",
    description: "Mise en place d'un site web de gestion de produits. Initiation base de données. Installation de logiciels et configuration machine et systéme",
    icon: Smartphone,
    iconBgColor: "bg-emerald-100",
    iconColor: "text-emerald-600",
  }
];

export const ExperienceSection = () => {
  return (
    <section className="pb-40 pt-40 px-6 bg-cover bg-center bg-[url('/assets/exp-bg.webp')] ">
      {/*----------------------------------------------
               Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ----------------------------------------
               BLOC GAUCHE : TEXTE
             ----------------------------------------------- */}
        <div className="space-y-6 -mt-10 px-6">
          <span className="text-[#FF5722] font-medium text-sm md:text-lg  tracking-wider">
            A propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight  mt-6 md:mt-4 mb-6">
            Mes Expériences <br /> Professionnels
          </h2>
          <p className="text-slate-500 w-fit  sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
            Voici un aperçu de mes expériences, illustrant mon savoir-faire et ma capacité à mener des projets à succès.
          </p>
          <button className="bg-orange-600 text-white mt-4 px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 active:scale-95">
            Mon CV
          </button>
        </div>

        {/* ----------------------------------------
               BLOC DROITE : CARDS (DYNAMIQUE)
             ----------------------------------------------- */}
        <div className="space-y-6 px-6">
          {EXPERIENCES_DATA.map((exp) => (
            <div 
              key={exp.id}
              className="bg-white p-8 rounded-2xl flex gap-6 items-start hover:shadow-md transition-all "
            >
              {/* Conteneur Icône */}
              <div className={`${exp.iconBgColor} p-4 rounded-full shrink-0`}>
                <exp.icon className={`${exp.iconColor} w-8 h-8`} />
              </div>

              {/* Contenu Texte */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-slate-500">{exp.period}</span>
                  <span className="text-orange-600 font-bold">• {exp.company}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};