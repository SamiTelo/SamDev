"use client";

import { motion } from "framer-motion";
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
import { useTranslations } from "next-intl";

export const TestimonialsSection = () => {
  const t = useTranslations("testimonials");

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const testimonials = [
    {
      id: 1,
      key: "james",
      image: "/assets/photo4.png",
      rating: 5,
    },
    {
      id: 2,
      key: "sarah",
      image: "/assets/photo3.png",
      rating: 5,
    },
    {
      id: 3,
      key: "carla",
      image: "/assets/photo1.png",
      rating: 5,
    },
  ];

  const clients = [
    {
      id: 1,
      key: "james",
      image: "/assets/photo2.png",
    },
    {
      id: 2,
      key: "sarah",
      image: "/assets/photo3.png",
    },
    {
      id: 3,
      key: "carla",
      image: "/assets/photo1.png",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-24 px-6 sm:px-10 ">
      
      {/* BG */}
      <div className="absolute -top-22 md:top-0 -left-56 md:-left-30 -z-10 pointer-events-none">
        <Image
          src="/assets/bg-testi.svg"
          alt="testimonial-bg"
          width={600}
          height={600}
          className="w-75 md:w-112.5 md:h-80 h-50 animate-pulse"
        />
      </div>

      {/* TITLE */}
      <Title
        title={t("header.title")}
        heading={t("header.heading")}
        text={t("header.description")}
      />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-24 md:gap-10 items-center pl-0 md:pl-12 py-10 sm:py-18 md:py-18">

        {/* LEFT */}
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

                        <div className="relative w-30 h-30 rounded-full overflow-hidden bg-white">
                          <Image
                            src={item.image}
                            alt={t(`items.${item.key}.name`)}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold">
                            {t(`items.${item.key}.name`)}
                          </h3>

                          <p className="text-gray-500 font-medium">
                            {t(`items.${item.key}.role`)}
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

                        <div className="ml-auto opacity-10">
                          <Quote size={80} strokeWidth={1} />
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed max-w-lg text-sm md:text-base">
                        {t(`items.${item.key}.text`)}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -right-26 top-72 -translate-y-1/2 hidden md:flex flex-col gap-4">
              <CarouselPrevious className="static bg-[#F6F8FA] border-none rounded-full md:p-6 p-0 text-[#FF5722]" />
              <CarouselNext className="static bg-[#F6F8FA] border-none rounded-full md:p-6 p-0 text-[#FF5722]" />
            </div>
          </Carousel>
        </div>

        {/* RIGHT */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            className="flex flex-col items-center lg:items-end pr-0 md:pr-12"
          >
            <div className="grid grid-cols-3 gap-6 mb-12">
              {clients.map((client) => (
                <div key={client.id} className="text-center">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 shadow-xl grayscale">
                    <Image
                      src={client.image}
                      alt={t(`clients.${client.key}.name`)}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h4 className="font-bold text-sm">
                    {t(`clients.${client.key}.name`)}
                  </h4>

                  <p className="text-[10px] text-gray-400">
                    {t(`clients.${client.key}.role`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1 w-full max-w-50 mr-0 md:mr-20">
              <div className="h-0.5 flex-1 bg-black" />
              <div className="h-3.5 flex-2 bg-[#FF5722]" />
              <div className="h-0.5 flex-1 bg-black" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};