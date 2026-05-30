import Hero from "@/sections/Hero";
import StoryTransition from "@/sections/StoryTransition";
import PortfolioStandard from "@/sections/PortfolioStandard";
import OurMission from "@/sections/OurMission";
import FeaturedProjects from "@/sections/FeaturedProjects";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center min-h-screen bg-white">
      <Hero />
      <StoryTransition />
      <PortfolioStandard />
      <OurMission />
      <FeaturedProjects />
    </main>
  );
}
