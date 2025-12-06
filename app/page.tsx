import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import FeaturedWork from "@/components/FeaturedWork";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <FeaturedWork />
      <Blog />
      <Testimonials />
      <Gallery />
    </main>
  );
}
