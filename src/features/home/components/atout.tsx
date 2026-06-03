"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Title } from "./title";
import { TiltCard } from "./tilt-card";
import { containerVariants, itemVariants } from "@/animations/fade.animation";
import { useTranslations } from "next-intl";

const features = [
  { key: "polyvalence", icon: "/assets/icon-1.svg" },
  { key: "collaboration", icon: "/assets/icon-2.svg" },
  { key: "rigueur", icon: "/assets/icon-3.svg" },
  { key: "adaptabilite", icon: "/assets/icon-4.svg" },
];

export const AtoutSection = () => {
  const t = useTranslations("atouts");

  return (
    <section
      id="atout"
      className="py-16 px-6 sm:px-10 bg-slate-50 bg-cover bg-center bg-[url('/assets/atout-bg.webp')]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <Title
          title={t("header.title")}
          heading={t("header.heading")}
          text={t("header.description")}
        />

        {/* wrapper motion */}
        <div className="overflow-hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 mt-10 md:mt-32 px-0 sm:px-12"
          >
            {features.map((item) => (
              <motion.div
                key={item.key}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <TiltCard>
                  <div className="bg-white px-12 pb-11 md:pb-14 pt-12 rounded-xl border border-gray-100 flex flex-col items-center text-center">
                    <div className="relative w-18 h-18 md:w-22 md:h-22 mb-6">
                      <Image
                        src={item.icon}
                        alt={t(`items.${item.key}.title`)}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {t(`items.${item.key}.title`)}
                    </h3>

                    <p className="text-gray-500 text-sm sm:text-[16px] leading-relaxed">
                      {t(`items.${item.key}.description`)}
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
          {t("cta")}
        </a>
      </div>
    </section>
  );
};
