import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Trajectory from "@/components/about/Trajectory";
import TechSkills from "@/components/about/TechSkills";
import CommunicativeSkills from "@/components/about/CommunicativeSkills";
import Education from "@/components/about/Education";
import MoreAbout from "@/components/about/MoreAbout";

export const metadata: Metadata = {
    title: "Sobre mí - Leonardo Meza",
    description: "Conoce más sobre Leonardo Meza, su trayectoria profesional y experiencia en desarrollo web y diseño.",
};

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen font-sans antialiased selection:bg-white/20 selection:text-white">
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <AboutHero />
                <Trajectory />
                <TechSkills />
                <CommunicativeSkills />
                <Education />
            </main>
        </div>
    );
}
