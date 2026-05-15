"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "./title";
import { TiltCard } from "./tilt-card";
import { containerVariants, itemVariants } from "@/animations/fade.animation";

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
      "Maîtrise rapide des nouvelles technologies et adaptation aux évolutions du projet.",
    icon: "/assets/icon-4.svg",
  },
];

export const AtoutSection = () => {
  return (
    <section
      id="atout"
      className="py-16 px-6 sm:px-10 bg-slate-50 bg-cover bg-center bg-[url('/assets/atout-bg.webp')]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <Title
          title="Atouts"
          heading="Ce Qui Fait la Différence"
          text="Mes atouts me permettent de proposer des solutions adaptées et un travail de qualité, sur web comme sur mobile."
        />

        {/* wrapper motion */}
        <div className="overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 mt-24 md:mt-32 px-0 sm:px-12"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <TiltCard>
                  <div className="bg-white px-12 pb-11 md:pb-14 pt-12 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                    <div className="relative w-18 h-18 md:w-22 md:h-22 mb-6">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {item.title}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <a
          href="#contact"
          className="inline-block mt-4 text-white md:text-[16px] text-sm py-4 px-10 rounded-full bg-[#FF5722] hover:bg-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-200 hover:shadow-black/50"
        >
          Contactez-moi
        </a>
      </div>
    </section>
  );
};
