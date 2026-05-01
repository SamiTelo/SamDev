import React from "react";
import { Copyright } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="w-full py-8 bg-[#f8f9fb]">
      {/*----------------------------------------------
           Main Content Grid 
        ----------------------------------------------------*/}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 items-center justify-center">
        {/* ----------------------------------------
             BLOCS
           ----------------------------------------------- */}
        <p className="text-center text-slate-500 text-sm md:text-base font-medium px-4 leading-relaxed">
          Developed and designed by <span className="text-slate-700 ml-1 font-bold">SAM</span>
          <span className="text-[#FF5722] ml-1 font-bold"> DEV</span>{" "}
          <Copyright size={14} className="inline mx-1 text-slate-400" />
          {currentYear} | Tous droits réservés
        </p>
      </div>
    </section>
  );
};
