import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/main/AboutSection";
import ContactUs from "@/components/main/ContactUs";
import Experience from "@/components/main/Experience";
import HeroSection from "@/components/main/HeroSection";
import WorkSection from "@/components/main/DevWorkSection";
import SecurityWorkSection from "@/components/main/SecurityWorkSection";
import ProductVisualizationWorkSection from "@/components/main/ProductVisualizationWorkSection";
import SocialLinksSection from "@/components/main/SocialLinksSections";
import WorkProcessSection from "@/components/main/WorkProcessSection";

export default function Home() {
  return (
    <>
        <NavBar />
        <div className="pt-16"> 
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <SecurityWorkSection />
            <ProductVisualizationWorkSection/>
            <Experience />
            <SocialLinksSection />
            <WorkProcessSection />
            <ContactUs />
        </div>
    </>
  );
}
