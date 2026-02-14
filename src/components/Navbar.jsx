import MtaLogo from "../assets/MtaLogo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const element = document.getElementById("about-us");
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollToAbout: true } });
    }
  };
  return (
    <div className="navbar">
      <img src={MtaLogo} alt="Muslimah Tech Alliance Logo" />
      <nav>
        <a href="#about-us" className="nav-link" onClick={handleAboutClick}>
          About Us
        </a>
        <Link to="/programs" className="nav-link">
          Programs
        </Link>
        <Link to="/past-events" className="nav-link">
          Past Events
        </Link>
        <Link to="/resources" className="nav-link">
          Resources
        </Link>
      </nav>
    </div>
  );
}
