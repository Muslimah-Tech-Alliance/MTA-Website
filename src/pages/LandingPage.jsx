import NavBar from "../components/Navbar";
import Header from "../components/Landing Page Components/Header";
import AboutUs from "../components/Landing Page Components/AboutUs";
import Programs from "../components/Landing Page Components/Programs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import TeamMembers from "../components/Landing Page Components/TeamMembers";
import Partners from "../components/Landing Page Components/Partners";
import Footer from "../components/Footer";

export default function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <Programs />
      <TeamMembers />
      <Partners />
      <Footer />
    </div>
  );
}
