import { AboutSection } from "./components/about"
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
        </main>
    {/* ---------------------------
        global  Footer
    ---------------------------- */}
        <footer>
        </footer>
        </>
    )
}