"use client";

import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Title } from "./title";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";



const testimonials = [
  {
    id: 1,
    name: "James Walker",
    role: "CEO, Agence Digitale",
    image: "/assets/photo4.png",
    rating: 5,
    text: "Nous avons confié à Samuel la refonte complète de notre site web. Il a su comprendre notre vision et proposer une solution moderne et performante. Le site est aujourd’hui plus rapide, mieux structuré et génère davantage de demandes clients. Collaboration très professionnelle du début à la fin.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Responsable Marketing",
    image: "/assets/photo3.png",
    rating: 5,
    text: "Samuel a développé notre landing page avec un vrai souci du détail. L’interface est fluide, responsive et optimisée pour la conversion. Il est réactif, organisé et respecte parfaitement les délais. Je recommande sans hésitation.",
  },
  {
    id: 3,
    name: "carla Moreau",
    role: "Fondatrice, Startup Tech",
    image: "/assets/photo1.png",
    rating: 5,
    text: "Nous avions besoin d’un développeur fiable pour structurer notre plateforme web et app mobile. Samuel a su apporter des solutions techniques efficaces tout en gardant une approche claire et pédagogique. Son travail a amélioré l’expérience utilisateur et la stabilité du projet.",
  },
];

const clients = [
  {
    id: 1,
    name: "James Walker",
    role: "CEO",
    image: "/assets/photo2.png",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Manager",
    image: "/assets/photo3.png",
  },
  {
    id: 3,
    name: "carla Moreau",
    role: "Fondatrice",
    image: "/assets/photo1.png",
  },
];

export const TestimonialsSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <section className="relative overflow-hidden pt-20 pb-24 px-6 sm:px-10 ">

      {/* IMAGE BG TOP LEFT */}
      <div className="absolute -top-22 md:top-0 -left-56 md:-left-30 -z-10 pointer-events-none">
        <Image
          src="/assets/bg-testi.svg"
          alt=""
          width={600}
          height={600}
          className="w-75 md:w-112.5 md:h-80 h-50 animate-pulse"
        />
      </div>

      {/* Title */}
      <Title
        title="Témoignages"
        heading="Ce Que Disent Mes Clients"
        text=" Découvrez les retours de mes clients sur la qualité de mon travail et les projets que nous avons réalisés ensemble."
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-24 md:gap-10 items-center pl-0 md:pl-12 py-10 sm:py-18 md:py-18">

        {/* LEFT - CAROUSEL */}
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.id}>
                  <Card className="border-none bg-[#F6F9FC] rounded-2xl p-7 md:p-10">
                    <CardContent className="p-0 space-y-6">
                      <div className="flex items-center gap-6">

                         {/* image */}
                        <div className="relative w-30 h-30 md:w-30 md:h-30 rounded-full overflow-hidden bg-white">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* name + rating */}
                        <div>
                          <h3 className="text-2xl font-bold">{item.name}</h3>
                          <p className="text-gray-500 font-medium">
                            {item.role}
                          </p>

                          <div className="flex flex-row mt-2 space-x-1 md:space-x-2">
                            {[...Array(item.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500 stroke-0"
                              />
                            ))}
                          </div>
                        </div>
                         
                         {/* icon */}
                        <div className="ml-auto opacity-10">
                          <Quote size={80} strokeWidth={1} />
                        </div>
                      </div>
                         
                        {/* text */}
                      <p className="text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
                        {item.text}
                      </p>

                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Desktop only */}
            <div className="absolute -right-26 top-72 -translate-y-1/2 hidden md:flex flex-col gap-4">
              <CarouselPrevious className="static bg-[#F6F8FA] border-none rounded-full md:p-6 p-0 text-[#FF5722]" />
              <CarouselNext className="static bg-[#F6F8FA] border-none rounded-full md:p-6 p-0 text-[#FF5722]" />
            </div>
          </Carousel>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center lg:items-end pr-0 md:pr-12">
          <div className="grid grid-cols-3 gap-6 mb-12">
            {clients.map((client) => (
              <div key={client.id} className="text-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 shadow-xl grayscale">
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-bold text-sm">{client.name}</h4>
                <p className="text-[10px] text-gray-400">{client.role}</p>
              </div>
            ))}
          </div>

          {/* Bar Design */}
          <div className="flex items-center gap-1 w-full max-w-50 mr-0 md:mr-20">
            <div className="h-0.5 flex-1 bg-black" />
            <div className="h-3.5 flex-2 bg-[#FF5722]" />
            <div className="h-0.5 flex-1 bg-black" />
          </div>
        </div>
      </div>
    </section>
  );
};
