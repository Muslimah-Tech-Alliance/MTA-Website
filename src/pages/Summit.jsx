import AboutSection from "../components/summit/AboutSection";
import FAQSection from "../components/summit/FAQSection";
import HeroSection from "../components/summit/HeroSection";
import SummitHighlights from "../components/summit/HighlightSection";
import JoinUs from "../components/summit/JoinUs";
import TestimonialSection from "../components/summit/TestimonialSection";
import WhoSection from "../components/summit/WhoSection";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";


const Summit = () => {
  return (
    <>
    <NavBar/>
        <section className=" py-12">
            <HeroSection />
            <AboutSection/>
            <SummitHighlights/>
            <WhoSection />
            <TestimonialSection />
            <FAQSection />
            <JoinUs/>
        </section>
      <Footer/>
    </>
  );
};

export default Summit;