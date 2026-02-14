import NavBar from "../components/Navbar"
import Header from "../components/Header"
import AboutUs from "../components/AboutUs"
import Programs from "../components/Programs";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function LandingPage(){
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToAbout) {
      const element = document.getElementById("about-us");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

    return(
        <div>
            <NavBar/>
            <Header/>
            <AboutUs/>
            <Programs/>
        </div>
    )
}