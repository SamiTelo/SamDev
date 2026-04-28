"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Rocket, Instagram} from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-200 w-full px-6 py-12 -top-44 lg:px-20 md:pb-52 md:pt-32 pt-52  bg-cover bg-center bg-[url('/assets/hero-bg.svg')]">
        {/*----------------------------------------------
           Main Content Grid 
        ----------------------------------------------------*/}
        <div className="max-w-7xl mx-auto gap-0 sm:gap-20 md:gap-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-[1.3fr_1.3fr] lg:grid-cols-[1.3fr_1.3fr] items-center  md:mt-20">

        {/* ----------------------------------------
          BLOC LEFT: Text Presentation 
      ----------------------------------------------- */}
         <div className="flex-1 py-8 md:mt-12 -mt-4 md:pl-2.5 pl-0">

        {/* Badge */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
          className="bg-white w-fit h-10 max-w-7xl mx-auto md:max-w-7xl md:mx-0 rounded-full   flex flex-row gap-1 justify-items-center px-6"
        >
          <div className="pt-2 mr-2">
           <Image
              src="/assets/hand3.svg"
              alt="logo"
              width={5}
              height={5}
              className="w-5 h-5"
            />
          </div>
          <div>
            <h6 className="text-[#F75023] text-xs text-center pt-2.5">
              Bonjour bienvenue !
            </h6>
          </div>
        </motion.div>
        <br></br>

        {/* Text */}
        <h1 className="font-bold text-4xl md:text-6xl leading-tight text-center md:text-left">
          Je suis <span className="text-[#F75023]">Samuel</span> Développeur fullstack
        </h1>

        <p className="mt-6 md:text-[16px] text-sm text-gray-700 text-center md:text-left leading-relaxed">
          Spécialisé dans la création d’applications web et mobiles modernes, performantes et adaptées aux besoins réels. J’allie front-end (NextJS, Flutter), back-end (NestJS) API 
          robuste et sécuriser pour transformer vos idées en solutions concrètes, intuitives et efficaces de A à Z.
        </p>
 
        {/* Buttom */}
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-start md:gap-8">
          <Link href="#services">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-[#F75023] text-white px-10 py-4 rounded-full md:text-[16px] text-sm"
            >
              <Rocket className="w-4 h-4" />
              Découvrir mes services
            </motion.div>
          </Link>

          <div className="flex gap-4">
                <a href="#" className="rounded-full bg-[#F6F9FC] p-3 hover:text-[#FF5722] transition-colors">
                  <Facebook size={20} fill="currentColor" stroke="none" />
                </a>
                <a href="#" className="rounded-full bg-[#F6F9FC] p-3  hover:text-[#FF5722] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="rounded-full bg-[#F6F9FC] p-3  hover:text-[#FF5722] transition-colors">
                  <Linkedin size={20} fill="currentColor" stroke="none" />
                </a>
              </div>
        </div>
      </div>

          {/* -------------------------------------------
           BLOC RIGHT:  Illustration et Icônes flottantes
         ------------------------------------------------- */}
          <div className="relative flex justify-center md:pl-10 pl-0 mt-8 md:mt-0">
            {/* Image de Nestjs en haut à gauche */}
            <div className="absolute left-20 -top-10 z-20 animate-bounce duration-3000 hidden md:block sm:block">
              <div className="rounded-xl bg-white p-4 shadow-xl">
                <Image
                  src="/assets/nestjs.svg"
                  alt="Nestjs"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            {/* Illustration Principale */}
            <div className="w-full max-w-3xl">
              <Image
                src="/assets/illustration.svg"
                alt="Illustration"
                width={1000}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Image de Figma en bas à droite */}
            <div className="absolute -bottom-30 right-50 z-20 animate-pulse hidden md:block sm:block">
              <div className="rounded-2xl bg-[#1e293b] p-5 shadow-2xl">
                <Image
                  src="/assets/figma.svg"
                  alt="Figma"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
