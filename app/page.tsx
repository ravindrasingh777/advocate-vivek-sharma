import HardworkSection from "@/landing/hardWorkSection";
import HeroSection from "@/landing/heroSection";
import Navbar from "@/landing/navbar";
import VoterSearch from "@/landing/voterSearch";
import CommitmentSection from "@/landing/commitmentSection";
import About from "@/landing/aboutSection";
import Carousel from "@/landing/carousel";
import ContactSection from "@/landing/contactSection";
import Footer from "@/landing/footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VoterSearch />
      <HardworkSection />
      <CommitmentSection />
      <About />
      <Carousel />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Page;
