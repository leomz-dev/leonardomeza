import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import GradualBlur from "@/components/ui/gradualblur";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedWork />
      <Blog />
      <Testimonials />
      <Gallery />
      <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
        {/* @ts-ignore */}
        <GradualBlur position="bottom" target="parent" strength={3} height="12rem" />
      </div>
    </main>
  );
}
