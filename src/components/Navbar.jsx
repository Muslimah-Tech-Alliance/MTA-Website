import { useState } from "react";
import MtaLogo from "../assets/Landing Page Pics/MTALogo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTo = (sectionId) => (e) => {
    e.preventDefault();
    setMenuOpen(false); // close menu after clicking

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <div className="navbar">
      <img src={MtaLogo} alt="Muslimah Tech Alliance Logo" />

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      <nav className={menuOpen ? "open" : ""}>
        <a href="#about-us" className="nav-link" onClick={handleScrollTo("about-us")}>
          About Us
        </a>
        <Link to="/programs" className="nav-link" onClick={handleScrollTo("programs")}>
          Programs
        </Link>
        <Link to="/past-events" className="nav-link" onClick={() => setMenuOpen(false)}>
          Past Events
        </Link>
        <Link to="/resources" className="nav-link" onClick={() => setMenuOpen(false)}>
          Resources
        </Link>
      </nav>
    </div>
  );
}