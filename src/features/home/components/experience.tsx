"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTranslations } from "next-intl";

const experiences = [
  { key: "freelance_fullstack", icon: "/assets/mobile-icon.svg" },
  { key: "2ets_web", icon: "/assets/web-icon.svg" },
  { key: "freelance_mobile", icon: "/assets/mobile-icon.svg" },
  { key: "dici_stage", icon: "/assets/web-icon.svg" },
];

export const ExperienceSection = () => {
  const t = useTranslations("experience");

  return (
    <section
      id="experience"
      className="pb-36 sm:pb-40 md:pb-40 pt-22 sm:pt-40 md:pt-40 px-6 bg-cover bg-center bg-[url('/assets/bg-project.png')]"
    >
      {/*-------------------------------------------------------
         Main Content Grid
    --------------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28 md:gap-12 items-center">
        {/*-------------------------------------------
           Bloc left
        ----------------------------------------*/}

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
          className="space-y-6 -mt-10 md:-mt-32 px-6 text-center sm:text-left md:text-left"
        >
          <span className="text-[#FF5722] font-medium text-sm md:text-lg tracking-wider">
            {t("header.badge")}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mt-6 md:mt-4 mb-6">
            {t("header.title")}
          </h2>

          <p className="text-slate-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed">
            {t("header.description")}
          </p>

          <a
            href="/assets/cv/cv-tiemtore-samuel.pdf"
            download
            className="inline-block mt-4 text-white md:text-[16px] text-sm py-4 px-10 rounded-full bg-[#FF5722] hover:bg-black transition-all"
          >
            {t("header.cta")}
          </a>
        </motion.div>

        {/*-----------------------------------------------
           Bloc right
        ------------------------------------------------------*/}

        {/* wrapper motion */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.95 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{
              duration: 1.5,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <ScrollArea className="h-96 md:h-116">
              <div className="space-y-6 sm:px-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white px-8 pt-10 pb-12 md:pt-8 md:pb-8 mt-3 mb-8 rounded-xl flex flex-col sm:flex-row gap-6  items-start  border border-white hover:border-[#f8774f] hover:shadow-[0_0_20px_#f8774f] transition duration-30"
                  >
                    <div className="p-4 rounded-full shrink-0 relative w-18 h-18">
                      <Image
                        src={exp.icon}
                        alt={t(`items.${exp.key}.title`)}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-900">
                        {t(`items.${exp.key}.title`)}
                      </h3>

                      <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
                        <span className="text-slate-500">
                          {t(`items.${exp.key}.period`)}
                        </span>
                        <span className="text-[#FF5722] font-bold">
                          • {t(`items.${exp.key}.company`)}
                        </span>
                      </div>

                      {Array.isArray(t.raw(`items.${exp.key}.description`)) ? (
                        <ul className="text-slate-400 text-sm space-y-1">
                          {t
                            .raw(`items.${exp.key}.description`)
                            .map((item: string, i: number) => (
                              <li key={i}>{item}</li>
                            ))}
                        </ul>
                      ) : (
                        <p className="text-slate-400 text-sm">
                          {t(`items.${exp.key}.description`)}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
