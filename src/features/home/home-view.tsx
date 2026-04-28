import { AboutSection } from "./components/about"
import { AtoutSection } from "./components/atout"
import { CompetenceSection } from "./components/compétence"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero"


export const HomeView = () => {
    return (
        <>
      {/* ---------------------------
        global Header
       ---------------------------- */}
        <Header/>
      {/* ---------------------------
        Main content
      ---------------------------- */}
        <main>
        <HeroSection/>
        <AboutSection/>
        <CompetenceSection/>
        <AtoutSection/>
        </main>
      {/* ---------------------------
        global  Footer
      ---------------------------- */}
        <footer>
        </footer>
        </>
    )
}