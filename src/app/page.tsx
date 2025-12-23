import HeroSection from "@/components/ui/HeroSection";
import WhyUsSection from "@/components/ui/WhyUsSection";
import DataManagementAgentCard from "@/components/ui/DataManagementCard";
import BigDataManagement from "@/components/ui/BigDataManagement";
import BookingReport from "@/components/ui/BookingReport";
import SolutionsDesignedForImpact from "@/components/ui/SolutionsDesignedForImpact";
import ContactSection from "@/components/ui/ContactSection";
import ProvenResults from "@/components/ui/ProvenResults";
import InnovatorComponent from "@/components/ui/InnovatorComponent";
import BeyondCodeSection from "@/components/ui/BeyondCodeSection";
import HomeSlider from "@/components/Slider/HomeSlider";
import UnicornsComponent from "@/components/ui/ScrollStackComponents";
import ScrollStackSection from "@/components/ui/ScrollStackSection";
import GsapAccordion from "@/components/ui/GsapAccordion";
import GsapAccordion2 from "@/components/ui/GsapAccordion2";
import BusinessSection from "@/components/ui/BusinessSection";
import VentureStudio from "@/components/ui/VentureStudio";
import VentureStudioAnimated from "@/components/ui/VentureStudioAnimated";
import Carousel from "@/components/ui/utils/Carousel";
import CenteredSlider from "@/components/ui/utils/CenteredSlider";
import MVPs from "@/components/ui/Mvp";
import ParallaxCardsDemo from "@/components/ParallaxCardsDemo";
import Index from "@/components/ui/Parallaxcards";
import StackingCards from "@/components/ui/StackingCards";
import StackingCard from "@/components/ui/StackingCard";
import FloatingLines from "@/components/ui/FloatingLines";
import Threads from "@/components/ui/Threads";
import ThreadHeroSection from "@/components/ui/ThreadHeroSection";
import DotsHeroSection from "@/components/ui/DotsHeroSection";
import HyperspeedHeroSection from "@/components/ui/HyperspeedHeroSection";
import ProjectsCards from "@/components/ui/ProjectsCards";
import ProjectsCardsTwo from "@/components/ui/ProjectCardsTwo";
import ProjectsCardsThree from "@/components/ui/ProjectsCardsThree";
import ProjectsCardsFour from "@/components/ui/ProjectCardsFour";
import { BackgroundPaths } from "@/components/ui/BackgroundPaths";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import BackgroundBeamsComponent from "@/components/ui/BackgroundBeamsComponent";

export default function HomePage() {
  return (
    <main>
      {/* <div className="absolute  z-0 w-[450px] h-[150px] rounded-full opacity-20 bg-[#0367FC] blur-[125px] top-[-40] left-1/2 -translate-x-1/2" /> */}

      {/* floating lines hero section ------------------ */}
      {/* <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <FloatingLines
          enabledWaves={["top", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={[10,10,20]}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={[8, 6, 4]}
          bendRadius={5.0}
          bendStrength={-0.5}
          interactive={true} 
          parallax={true}
          linesGradient={['#0F62E2']}
        />
      </div> */}
      {/* floating lines hero section ------------------ */}

      {/* Threads hero section --------------------------- */}
       {/* <ThreadHeroSection/> */}
      {/* Threads hero section --------------------------- */}

      {/* dots hero section ----------- */}
      {/* <DotsHeroSection/> */}
      {/* dots hero section ----------- */}

      {/* Hyperspeed hero section ------------ */}
      {/* <HyperspeedHeroSection/> */}
      {/* Hyperspeed hero section ------------ */}

      {/* <div className="mx-20">
       <HomeSlider />
     </div> */}

      {/* <HeroSection /> */}
      {/* <BackgroundPaths title="KavWeb" /> */}
      <BackgroundBeamsComponent/>



      {/* <StackingCards /> */}
      {/* <GsapAccordion2  /> */}
      {/* <StackingCard /> */}
      {/* <ProjectsCards/> */}
      <ProjectsCardsTwo/>
      {/* <ProjectsCardsThree /> */}
      {/* <ProjectsCardsFour /> */}

      

      {/* <GsapAccordion /> */}
      {/* <ScrollStackSection />  */}
      {/* <UnicornsComponent /> */}
      <div className="mx-50 ">{/* <HomeSlider /> */}</div>
      <MVPs />
      <BusinessSection />
      <VentureStudioAnimated />
      {/* <VentureStudio /> */}
      <ProvenResults />
      <CenteredSlider />
      {/* <Carousel /> */}
      {/* <WhyUsSection />
       */}
      {/* <DataManagementAgentCard /> */}
      {/* <BigDataManagement /> */}
      {/* <BookingReport /> */}
      {/* <SolutionsDesignedForImpact /> */}
      {/* <div className="mt-20 mx-30"> */}
      {/* <ContactSection /> */}
      {/* </div> */}
      {/* <ProvenResults /> */}
      {/* <InnovatorComponent /> */}
      {/* <BeyondCodeSection /> */}
    </main>
  );
}
