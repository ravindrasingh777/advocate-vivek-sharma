import HardworkSection from "@/landing/hardWorkSection";
import HeroSection from "@/landing/heroSection";
import Navbar from "@/landing/navbar";
import VoterSearch from "@/landing/voterSearch";
import CommitmentSection from "@/landing/commitmentSection";
import SocialCarousel from "@/landing/socialCarousel";
import About from "@/landing/aboutSection";
import Carousel from "@/landing/carousel";
import ContactSection from "@/landing/contactSection";
import MustViewedSection from "@/landing/mustViewedSection";
import TopMarquee from "@/landing/topMarquee";
import WhatsappJoinSection from "@/landing/whatsappJoinSection";
import Footer from "@/landing/footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <TopMarquee />
      <HeroSection />
      <VoterSearch />
      {/* <HardworkSection /> */}
      <MustViewedSection />
      <SocialCarousel />
      <CommitmentSection />
      <About />
      <Carousel />
      <WhatsappJoinSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Page;
