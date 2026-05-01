import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CtaSection = () => {
  return (
    <section className="py-12 px-4 w-full bg-cover bg-center bg-[url('/assets/bg-cta.svg')] rounded-3xl my-20">
      {/*----------------------------------------------
           Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto  pb-4 grid grid-cols-1 md:grid-cols-[1.4fr_1.2fr] gap-16 md:gap-0 items-center overflow-hidden px-0 sm:px-12 md:px:18">
        
        {/* ----------------------------------------
             BLOC GAUCHE : Texte & Formulaire
           ----------------------------------------------- */}
        <div className="space-y-8 text-white">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Mon Compteur</h2>
            <p className="max-w-2xl mx-auto text-white sm:text-[16px] md:text-[16px] text-sm leading-relaxed ">
             Ces chiffres reflètent mon savoir-faire, mon expérience et ma passion pour le développement web et mobile. Mon newsletter
            </p>
          </div>

          <form className="relative flex items-center w-full max-w-md bg-white rounded-full p-2 shadow-lg">
            <input 
              type="email" 
              placeholder="Entrer votre email" 
              className="grow bg-transparent px-6 sm:px-8 md:px-8 py-3 text-gray-800 focus:outline-none placeholder:text-gray-400 sm:text-[16px] md:text-[16px] text-xs"
            />
            <button 
              type="submit" 
              className="bg-[#FF5722] hover:bg-[#E64A19] transition-colors text-white sm:text-[16px] md:text-[16px] text-xs px-6 sm:px-8 md:px-8 py-3 rounded-full flex items-center gap-2 font-medium"
            >
              Souscrire
              <ArrowUpRight size={20} />
            </button>
          </form>
        </div>

        {/* ----------------------------------------
             BLOC DROITE : Bulles de Statistiques
           ----------------------------------------------- */}
        <div className="relative h-75 flex items-center justify-center lg:justify-end mr-0 sm:mr-18 md:mr-6">
          {/* Bulle Projets Front-end */}
          <div className="absolute top-0 right-24 md:right-40 w-48 h-48 md:w-56 md:h-56 bg-[#388E7B] rounded-full flex flex-col items-center justify-center text-white  z-10 border border-white/10">
            <span className="text-5xl font-extrabold ml-8">15 +</span>
            <span className="text-center mt-6 font-light leading-tight">
              Projets<br/>Front-end
            </span>
          </div>

          {/* Bulle Projets Back-end */}
          <div className="absolute -bottom-2 right-4 md:right-4 w-48 h-48 md:w-56 md:h-56 bg-[#2D6A5D] rounded-full flex flex-col items-center justify-center text-white  z-20 border border-white/10">
            <span className="text-5xl font-extrabold ml-8">10 +</span>
            <span className="text-center mt-6 font-light leading-tight">
              Projets<br/>Back-end
            </span>
          </div>
          
          {/* Effet décoratif (Cercle flou en arrière-plan) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
        </div>

      </div>
    </section>
  );
};