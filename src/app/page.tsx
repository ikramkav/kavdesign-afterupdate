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

export default function HomePage() {
  return (
    <main>
      <div className="absolute  z-0 w-[450px] h-[150px] rounded-full opacity-20 bg-[#0367FC] blur-[125px] top-[-40] left-1/2 -translate-x-1/2" />

      <HeroSection />
      {/* <StackingCards /> */}
      {/* <GsapAccordion2  /> */}
      <StackingCard/>
      
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
