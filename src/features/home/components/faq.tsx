"use client";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Title } from "./title";
import Image from "next/image";
import { useTranslations } from "next-intl";

const faqData = [
  { key: "delivery", id: "item-1" },
  { key: "fullstack", id: "item-2" },
  { key: "process", id: "item-3" },
  { key: "responsive", id: "item-4" },
  { key: "refactor", id: "item-5" },
  { key: "contact", id: "item-6" },
];

export const FaqSection = () => {
  const t = useTranslations("faq");

  return (
    <section className="relative overflow-hidden py-20 sm:py-40 md:pt-40 px-6 sm:px-10">
      {/* IMAGE BG TOP RIGHT */}
      <div className="absolute -top-20 md:top-0 -right-38 md:-right-24 -z-10 pointer-events-none">
        <Image
          src="/assets/bg-testi.svg"
          alt="faq-bg"
          width={600}
          height={600}
          className="`w-75 md:w-112.5  md:h-80 h-50 animate-pulse"
        />
      </div>

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
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 sm:pt-20 md:pt-20"
        >
          {/* Colonne Gauche */}
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full space-y-4"
          >
            {faqData.slice(0, 3).map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </Accordion>

          {/* Colonne Droite */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.slice(3, 6).map((item) => (
              <FaqItem key={item.id} item={item} />
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};


/*------------------------------------------------------
          Composant accordéon
-------------------------------------------------------*/
const FaqItem = ({ item }: { item: (typeof faqData)[0] }) => {
  const t = useTranslations("faq");

  return (
    <AccordionItem
      value={item.id}
      className="bg-[#F6F9FC] rounded-[2rem] border-3 border-transparent px-8 py-2 overflow-hidden transition-colors duration-300 data-[state=open]:bg-[#DDF5E6] data-[state=open]:border-white"
    >
      <AccordionTrigger className="hover:no-underline text-lg font-semibold text-left py-5 sm:py-6 md:py-6 group [&>svg]:hidden">
        <div className="flex items-center justify-between w-full">
          <span className="text-[16px] sm:text-[16px] md:text-[17px]">
            {t(`items.${item.key}.question`)}
          </span>

          {/* Le cercle avec l'icône + / - */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-black shrink-0 transition-colors duration-300 group-data-[state=open]:bg-black group-data-[state=open]:text-white ml-3 sm:ml-0 md:ml-0">
            <Plus className="w-5 h-5 block group-data-[state=open]:hidden" />
            <Minus className="w-5 h-5 hidden group-data-[state=open]:block" />
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="text-gray-700 leading-relaxed pb-6">
        {t(`items.${item.key}.answer`)}
      </AccordionContent>
    </AccordionItem>
  );
};