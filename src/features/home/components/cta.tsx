"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="pt-12 pb-0 px-6 sm:px-10 w-full bg-cover bg-center bg-[url('/assets/bg-cta.svg')] rounded-3xl my-0 md:my-20">
      {/*----------------------------------------------
           Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto pb-0  md:pb-20 grid grid-cols-1 md:grid-cols-[1.4fr_1.2fr] gap-16 md:gap-0 items-center overflow-hidden px-0 sm:px-12 md:px:18">
        {/* ----------------------------------------
             BLOC GAUCHE : Texte & Formulaire
           ----------------------------------------------- */}
        <motion.div
          initial={{ x: -50, opacity: 0, scale: 0.95 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="space-y-8 text-white"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Mon Compteur
            </h2>
            <p className="max-w-2xl mx-auto text-white sm:text-[16px] md:text-[16px] text-sm leading-relaxed ">
              Ces chiffres reflètent mon savoir-faire, mon expérience et ma
              passion pour le développement web et mobile. Mon newsletter
            </p>
          </div>

          {/* newsletter */}
          <div className="relative max-w-md md:w-full w-84.5 ">
            <form>
              <div className="flex items-center p-1.5 bg-white rounded-full shadow-lg">
                <input
                  type="email"
                  placeholder="Entrer votre adresse email"
                  className="grow bg-transparent px-6 py-3 outline-none text-gray-700 placeholder:text-gray-400 md:text-sm text-xs"
                />
                <button className="hover:scale-102 bg-black transition-all duration-300 text-white px-6 py-3 rounded-full flex items-center gap-0 md:gap-2 md:text-sm text-xs font-medium hover:bg-[#FF5722]">
                  S’inscrire
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ----------------------------------------
             BLOC DROITE : Bulles de Statistiques
           ----------------------------------------------- */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="relative h-75 flex items-center justify-center lg:justify-end mr-0 sm:mr-18 md:mr-6"
        >
          {/* Bulle Projets Front-end */}
          <div className="absolute top-0 right-38 md:right-40 w-48 h-48 md:w-56 md:h-56 bg-[#388E7B] rounded-full flex flex-col items-center justify-center text-white  z-10 border border-white/10">
            <span className="text-5xl font-extrabold ml-6 md:ml-8">12 +</span>
            <span className="text-center sm:text-[16px] md:text-[16px] px-6 md:px-6 text-sm mt-6 font-light leading-tight">
              Projets
              <br />
              Front-end
            </span>
          </div>

          {/* Bulle Projets Back-end */}
          <div className="absolute bottom-26 md:-bottom-2 right-0 md:right-4 w-48 h-48 md:w-56 md:h-56 bg-[#2D6A5D] rounded-full flex flex-col items-center justify-center text-white  z-20 border border-white/10">
            <span className="text-5xl font-extrabold ml-6 md:ml-8">10 +</span>
            <span className="text-center sm:text-[16px] md:text-[16px] px-6 md:px-6 text-sm mt-6 font-light leading-tight">
              Projets
              <br />
              Back-end
            </span>
          </div>

          {/* Effet décoratif (Cercle flou en arrière-plan) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};
