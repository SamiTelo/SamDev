import { AboutSection } from "./components/about"
import { AtoutSection } from "./components/atout"
import { CompetenceSection } from "./components/compétence"
import { ExperienceSection } from "./components/experience"
import { FaqSection } from "./components/faq"
import { Header } from "./components/header"
import { HeroSection } from "./components/hero"
import { ProjectSection } from "./components/project"
import { SkillSection } from "./components/skill"
import { TestimonialsSection } from "./components/testimonial"


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
        <SkillSection/>
        <ProjectSection/>
        <FaqSection/>
        <TestimonialsSection/>
        </main>
      {/* ---------------------------
        global  Footer
      ---------------------------- */}
        <footer>
        </footer>
        </>
    )
}