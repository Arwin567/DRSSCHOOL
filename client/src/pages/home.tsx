import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero";
import StatsSection from "@/components/sections/stats";
import AboutSection from "@/components/sections/about-section";
import AcademicsSection from "@/components/sections/academics-section";
import FacilitiesSection from "@/components/sections/facilities-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
