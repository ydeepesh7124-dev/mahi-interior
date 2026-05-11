import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectShowcase from "@/components/ProjectShowcase";
import VideoExperience from "@/components/VideoExperience";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Navbar />
      <Hero />
      <About />
      <VideoExperience />
      <ProjectShowcase />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
