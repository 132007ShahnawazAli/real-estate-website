import Hero from "@/sections/Hero";
import StoryTransition from "@/sections/StoryTransition";
import PortfolioStandard from "@/sections/PortfolioStandard";
import OurMission from "@/sections/OurMission";
import FeaturedProjects from "@/sections/FeaturedProjects";
import FeaturedProjectsAlt from "@/sections/FeaturedProjectsAlt";
import MarketData from "@/sections/MarketData";
import Testimonials from "@/sections/Testimonials";
import CreativeCTA from "@/sections/CreativeCTA";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen bg-slate-50">
      <Hero />
      <StoryTransition />
      {/* <PortfolioStandard /> */}
      <OurMission />
      {/* <FeaturedProjects /> */}
      <FeaturedProjectsAlt />
      <MarketData />
      <Testimonials />
      <CreativeCTA />
      <Footer />
    </main>
  );
}
