"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "./title";
import { containerVariants, itemVariants } from "@/animations/fade.animation";
import { useTranslations } from "next-intl";

const competence = [
  {
    key: "web",
    icon: "/assets/web.svg",
    color: "bg-emerald-50",
    dotColor: "bg-emerald-400",
  },
  {
    key: "mobile",
    icon: "/assets/mobile.svg",
    color: "bg-indigo-50",
    dotColor: "bg-indigo-400",
  },
  {
    key: "design",
    icon: "/assets/design.svg",
    color: "bg-orange-50",
    dotColor: "bg-orange-400",
  },
];

export const CompetenceSection = () => {
  const t = useTranslations("competence");

  return (
    <section
      id="competence"
      className="pt-0 md:sm:pt-20 sm:pt-20 pb-16 sm:pb-30 md:pb-48 px-6 sm:px-10 bg-white"
    >
      {/* Title */}
      <Title
        title={t("header.title")}
        heading={t("header.heading")}
        text={t("header.description")}
      />

      {/*----------------------------------------------
               Main Content Grid 
        ----------------------------------------------------*/}

      {/* wrapper motion */}
      <div className="overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 pt-10"
        >
          {/* ----------------------------------------
               BLOC CARD
             ----------------------------------------------- */}
          {competence.map((skill) => (
            <motion.div
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              key={skill.key}
              className="flex flex-col items-center text-center group"
            >
              {/* Conteneur icône */}
              <div className="relative w-48 h-48 mb-2 sm:mb-8 md:mb-8 flex items-center justify-center">
                {/* Blob background */}
                <div
                  className={`absolute inset-0 ${skill.color} rounded-full opacity-60 blur-2xl group-hover:scale-110 transition-transform duration-500`}
                />

                {/* Image */}
                <div className="relative z-10 w-36 h-36 sm:w-42 md:w-42">
                  <Image
                    src={skill.icon}
                    alt={t(`items.${skill.key}.title`)}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Points décoratifs */}
                <div
                  className={`absolute top-4 left-4 w-3 h-3 rounded-full ${skill.dotColor} opacity-40 animate-bounce duration-3000`}
                />
                <div
                  className={`absolute bottom-8 right-6 w-2 h-2 rounded-full ${skill.dotColor} opacity-60 animate-bounce duration-3000`}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {t(`items.${skill.key}.title`)}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-slate-500 leading-relaxed sm:text-[16px] md:text-[16px] px-6 text-sm">
                {t(`items.${skill.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
