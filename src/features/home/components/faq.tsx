import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react";
import { Title } from "./title";

const faqData = [
  {
    id: "item-1",
    question: "Quel est le délai de livraison d’un projet ?",
    answer:
      "Le délai dépend de la complexité du projet. Un site vitrine peut être livré en 1 à 3 semaines, tandis qu’une application web ou mobile plus complète peut nécessiter 3 à 7 semaines. Un planning précis est défini après l’analyse de vos besoins.",
  },
  {
    id: "item-2",
    question: "Interviens-tu sur le front-end et le back-end ?",
    answer:
      "Oui, je suis développeur fullstack. Je conçois des interfaces modernes et optimisées côté front-end, et je développe des API robustes et sécurisées avec NestJS côté back-end.",
  },
  {
    id: "item-3",
    question: "Comment se déroule un projet avec toi ?",
    answer:
      "Je commence par analyser vos besoins afin de proposer une solution adaptée. Ensuite, je passe par la conception, le développement, les tests, l’optimisation et enfin la mise en ligne du projet.",
  },
  {
    id: "item-4",
    question: "Proposes-tu des applications responsive ?",
    answer:
      "Oui, toutes les applications que je développe sont conçues pour fonctionner parfaitement sur ordinateur, tablette et mobile, avec une expérience utilisateur fluide et cohérente.",
  },
  {
    id: "item-5",
    question: "Peux-tu améliorer ou refondre une application existante ?",
    answer:
      "Oui, je peux optimiser, moderniser ou restructurer une application existante afin d’améliorer ses performances, son design et sa maintenabilité.",
  },
  {
    id: "item-6",
    question: "Comment te contacter pour un projet ?",
    answer:
      "Vous pouvez me contacter via le formulaire de mon portfolio ou par email. Je réponds rapidement pour discuter de votre projet et de vos objectifs.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-20 sm:py-40 md:py-40 px-4 bg-[#f8f9fa]">
      
      {/* Title */}
      <Title
        title="FAQs"
        heading="Questions fréquentes"
        text="Voici quelques questions courantes sur nos services pour vous aider à mieux comprendre."
      />

      {/*----------------------------------------------
                Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-2 pt-10 sm:pt-20 md:pt-20">
        {/* Colonne Gauche */}
        <Accordion type="single" collapsible className="w-full space-y-4">
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
      </div>
    </section>
  );
};

// Composant accordéon
const FaqItem = ({ item }: { item: (typeof faqData)[0] }) => (
  <AccordionItem
    value={item.id}
    className="bg-white rounded-[2rem] border-3 border-transparent px-8 py-2 overflow-hidden transition-colors duration-300 data-[state=open]:bg-[#DDF5E6] data-[state=open]:border-white"
  >
    <AccordionTrigger className="hover:no-underline text-lg font-semibold text-left py-5 sm:py-6 md:py-6 group [&>svg]:hidden">
      <div className="flex items-center justify-between w-full">
        <span className="text-[16px] sm:text-[16px] md:text-[17px]">
          {item.question}
        </span>

        {/* Le cercle avec l'icône + / - */}
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-black shrink-0 transition-colors duration-300 group-data-[state=open]:bg-black group-data-[state=open]:text-white ml-3 sm:ml-0 md:ml-0">
          <Plus className="w-5 h-5 block group-data-[state=open]:hidden" />
          <Minus className="w-5 h-5 hidden group-data-[state=open]:block" />
        </div>
      </div>
    </AccordionTrigger>
    <AccordionContent className="text-gray-700 leading-relaxed pb-6">
      {item.answer}
    </AccordionContent>
  </AccordionItem>
);
