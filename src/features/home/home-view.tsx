import { AboutSection } from "./components/about"
import { AtoutSection } from "./components/atout"
import { CompetenceSection } from "./components/compétence"
import { ExperienceSection } from "./components/experience"
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
        <ExperienceSection/>
        </main>
      {/* ---------------------------
        global  Footer
      ---------------------------- */}
        <footer>
        </footer>
        </>
    )
}