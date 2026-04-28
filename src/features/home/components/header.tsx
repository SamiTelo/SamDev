import { NavBar } from "./navbar";


export const Header = () => {
  return (
    <header className="sticky md:top-6 top-8 inset-x-0 z-40 transition-all duration-300">
        <NavBar/>
    </header>
  );
};
