import React from 'react';
import { Copyright } from 'lucide-react';

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
        <div className="flex items-center justify-center gap-2 text-slate-500 text-sm md:text-base font-medium">
          <p>Developed and designed by</p>
          <div className="flex items-center font-bold tracking-tight">
            <span className="text-slate-700">SAM</span>
            <span className="text-orange-600 ml-1">DEV</span>
          </div>
          <div className="flex items-center gap-1 ml-1">
            <Copyright size={14} className="text-slate-400" />
            {currentYear} | Tous droits
            réservés
          </div>
        </div>

      </div>
    </section>
  );
};