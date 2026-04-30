import Image from "next/image";
import { SheetSide } from "./navbar-mobile";

export const NavBar = () => {
  return (
    <nav className=" mb-16 md:mb-20 flex items-center justify-between rounded-full bg-black px-6 md:px-8 py-4 md:py-5 text-white backdrop-blur">
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
              <a href="#" className="text-[#FF5722]">Home</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">About</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">Compétences</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">Expériences</a>
              <a href="#" className="hover:text-[#FF5722] transition-colors">Portfolio</a>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block rounded-full border border-[#FF5722] px-8 py-2 text-sm font-semibold text-white transition-all hover:bg-[#FF5722]">
          Download CV
        </button>

        {/* Mobile Menu */}
        <SheetSide />
      </nav>
  );
};
