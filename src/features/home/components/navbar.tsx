"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { SheetSide } from "./navbar-mobile";
import { Switch } from "@/components/ui/switch";

export const NavBar = () => {
  const locale = useLocale();
  const t = useTranslations("navbar");
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "fr" ? "en" : "fr";

    const segments = pathname.split("/");
    segments[1] = newLocale;

    router.push(segments.join("/"));
  };

  const cvPath =
  locale === "fr"
    ? "/assets/cv/cv-tiemtore-samuel-fr.pdf"
    : "/assets/cv/cv-tiemtore-samuel-en.pdf";

  return (
    <nav className="mb-16 md:mb-20 flex items-center justify-between rounded-full bg-black px-6 md:px-8 py-4 md:py-5 text-white backdrop-blur">

      {/* Logo */}
      <div className="flex items-center gap-2 font-bold tracking-wider">
        <div className="h-8 w-8 md:h-10 md:w-10 rounded-full relative">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        SAM DEV
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm">
        <a href="#hero" className="text-[#FF5722]">
          {t("menu.home")}
        </a>
        <a href="#about" className="hover:text-[#FF5722] transition-colors">
          {t("menu.about")}
        </a>
        <a href="#competence" className="hover:text-[#FF5722] transition-colors">
          {t("menu.skills")}
        </a>
        <a href="#experience" className="hover:text-[#FF5722] transition-colors">
          {t("menu.experience")}
        </a>
        <a href="#project" className="hover:text-[#FF5722] transition-colors">
          {t("menu.portfolio")}
        </a>
        <a href="#contact" className="hover:text-[#FF5722] transition-colors">
          {t("menu.contact")}
        </a>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        
        {/* LANGUAGE TOGGLE */}
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
          <div
            className={`relative w-5 h-5 rounded-full overflow-hidden transition-opacity ${
              locale === "fr" ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image
              src="/assets/flags/fr.png"
              alt="FR"
              fill
              className="object-cover"
            />
          </div>

          <Switch
            checked={locale === "en"}
            onCheckedChange={toggleLocale}
            className="bg-white/10 data-[state=checked]:bg-white/10 data-[state=unchecked]:bg-white/10"
          />

          <div
            className={`relative w-5 h-5 rounded-full overflow-hidden transition-opacity ${
              locale === "en" ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image
              src="/assets/flags/us.png"
              alt="EN"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CV */}
        <a
          href={cvPath}
          download
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block rounded-full border border-[#FF5722] px-8 py-2 text-sm font-semibold text-white transition-all hover:bg-[#FF5722]"
        >
          {t("cv")}
        </a>

        {/* Mobile Menu */}
        <SheetSide />
      </div>
    </nav>
  );
};