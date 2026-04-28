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

const SHEET_SIDES = ["left"] as const;

export function SheetSide() {
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
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader className="mt-10">
              <SheetTitle>
                <div className="flex items-center gap-2 font-bold tracking-wider">
                  SAM <span className="">DEV</span>
                </div>
              </SheetTitle>
              <SheetDescription>
                Développeur fullstack | UI/UX . Web . Mobile . DevOps
              </SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-6 text-sm no-scrollbar overflow-y-auto px-4">
              <a href="#" className="text-[#FF5722]">Home</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">About</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">Compétences</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">Expériences</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">Portfolio</a>

              <div className="border-t border-slate-200 mt-3 pt-3"></div>
            </div>
            <SheetFooter>
              <Button className="rounded-full border h-10 px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-orange-500 bg-black">
                Download CV
              </Button>
              <SheetClose asChild>
                <Button variant="outline"className="rounded-full h-10 px-6 py-2">
                  Fermer
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
