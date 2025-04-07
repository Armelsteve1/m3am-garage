import AboutSection from "@/components/AboutSection";
import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <AboutSection />
      <Contact />
    </div>
  );
}
