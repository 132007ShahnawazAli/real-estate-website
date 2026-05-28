import Hero from "@/sections/Hero";
import BrandStatement from "@/sections/BrandStatement";
import PortfolioStandard from "@/sections/PortfolioStandard";
import OurMission from "@/sections/OurMission";
import FeaturedProjects from "@/sections/FeaturedProjects";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-black">
      <Hero />
      <BrandStatement />
      <PortfolioStandard />
      <OurMission />
      <FeaturedProjects />
    </main>
  );
}
