"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const SHEET_SIDES = ["left"] as const;

export function SheetSide() {
  const t = useTranslations("mobileMenu");

  const locale = useLocale();

  const cvPath =
  locale === "fr"
    ? "/assets/cv/cv-tiemtore-samuel-fr.pdf"
    : "/assets/cv/cv-tiemtore-samuel-en.pdf";

  return (
    <div className="flex flex-wrap gap-2 md:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#FF5722] focus:bg-transparent active:bg-transparent"
            >
              <Menu className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>

          {/* Content */}
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            {/* Header */}
            <SheetHeader className="mt-10 px-6">
              <SheetTitle>
                <div className="flex items-center gap-2 font-bold tracking-wider">
                  SAM <span className="">DEV</span>
                </div>
              </SheetTitle>

              <SheetDescription>
                {t("description")}
              </SheetDescription>
            </SheetHeader>

            {/* Main */}
            <main>
              <div className="flex flex-col gap-6 p-6 text-sm no-scrollbar overflow-y-auto px-6">
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

                <div className="border-t border-slate-200 mt-3 pt-3"></div>
              </div>
            </main>

            {/* Footer */}
            <SheetFooter>
              <a
                href={cvPath}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border h-10 px-6 py-2 text-sm font-semibold text-white text-center transition-all hover:bg-[#FF5722] bg-black"
              >
                {t("cv")}
              </a>

              <SheetClose asChild>
                <Button variant="outline" className="rounded-full h-10 px-6 py-2">
                  {t("close")}
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}