import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedWork from "@/components/FeaturedWork";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import AnimatedBlur from "@/components/AnimatedBlur";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedWork />
      <Testimonials />
      <AnimatedBlur />
    </main>
  );
}
