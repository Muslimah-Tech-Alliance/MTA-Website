import HeroSection from "../components/summit/HeroSection";
import AboutSection from "../components/summit/AboutSection";

const Summit = () => {
  return (
    <>
        <section className="px-6 md:px-16 lg:px-[7.5rem] py-12">
            <HeroSection />
            <AboutSection/>
        </section>
    </>
  );
};

export default Summit;