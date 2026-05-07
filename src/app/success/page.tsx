"use client";

import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";

export default function  SuccessSection () {
  return (
    <section className="relative min-h-screen bg-[#f7f7f8] overflow-hidden flex flex-col">


      {/*-------------------------------------------------------------------
              Decorative blobs (left & right)
      ----------------------------------------------------------*/}
      {/* Bottom-left pink blob */}
      <div className="pointer-events-none absolute bottom-24 -left-20 w-72 h-72 rounded-full bg-linear-to-br from-red-200/60 via-orange-100/50 to-transparent blur-2xl" />
      {/* Bottom-right green blob */}
      <div className="pointer-events-none absolute bottom-10 -right-16 w-80 h-72 rounded-full bg-linear-to-bl from-green-200/60 via-emerald-100/40 to-transparent blur-2xl" />
      {/* Dot grid left */}
      <div
        className="pointer-events-none absolute left-8 top-1/3 w-28 h-40 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
          backgroundSize: "10px 10px",
        }}
      />
      {/* Scattered decorative dots */}
      <span className="pointer-events-none absolute top-44 left-[38%] w-2 h-2 rounded-full bg-emerald-400/70" />
      <span className="pointer-events-none absolute top-52 right-[36%] w-1.5 h-1.5 rounded-full bg-orange-400/80" />
      <span className="pointer-events-none absolute top-72 right-[30%] w-2 h-2 rounded-full bg-orange-400/60" />

      {/* -----------------------------------------------------
            Main content 
       --------------------------------------------------------*/}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 gap-8">

        {/* Checkmark illustration */}
        <div className="relative flex items-center justify-center">
          {/* Outer soft glow ring */}
          <div className="absolute w-36 h-36 rounded-full bg-linear-to-br from-green-100 via-white to-green-50 blur-sm opacity-80" />
          {/* Circle card */}
          <div className="relative w-28 h-28 rounded-full bg-white shadow-xl shadow-green-100/50 flex items-center justify-center">
            {/* Check icon */}
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          {/* Sparkle top-left */}
          <svg className="absolute -top-3 left-4 text-green-400 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
          </svg>
          {/* Sparkle right */}
          <svg className="absolute top-2 -right-2 text-green-300 w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z"/>
          </svg>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
            Message envoyé{" "}
            <span className="text-green-500">avec succès</span>
            <span className="text-gray-900"> !</span>
          </h1>
        </div>

        {/* Sub-text */}
        <p className="text-center text-gray-500 sm:text-[16px] md:text-[16px] text-sm leading-relaxed max-w-md">
          Merci pour votre message. Je vous répondrai dans
          <br />
          les plus brefs délais.
        </p>

        {/* Divider */}
        <div className="w-10 h-0.75 rounded-full bg-green-500" />

        {/* CTA Button */}
        <Link
          href="/"
          className="flex items-center gap-3 bg-orange-500 hover:bg-black active:scale-95 transition-all text-white font-semibold text-base px-10 py-4 rounded-full shadow-lg shadow-orange-200 hover:shadow-black/50"
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          Retour à l&apos;accueil
        </Link>
      </main>

      {/*--------------------------------------------
           Footer 
       ---------------------------------------------------*/}
      <footer className="relative z-10 border-t border-gray-100 bg-white/60 backdrop-blur-sm py-5">
        <div className="flex items-center justify-center gap-4">
          {/* Mail icon pill */}
          <div className="hidden w-10 h-10 rounded-full bg-orange-50 border border-orange-100 md:flex items-center justify-center">
            <Mail size={18} className="text-orange-400" strokeWidth={1.8} />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Une question urgente ? N&apos;hésitez pas à me contacter directement
            </p>
            <a
              href="mailto:samueltiemtore10@gmail.com"
              className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              samueltiemtore10@gmail.com
            </a>
          </div>
        </div>
      </footer>

    </section>
  );
};