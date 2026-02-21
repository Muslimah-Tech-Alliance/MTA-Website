import XIcon from "../assets/X-icon2.png";
import LinkedInIcon from "../assets/Linkedin-icon2.png";
import FbIcon from "../assets/fb-icon2.png";
import PurpleBar from "../assets/purple-horizontal-bar.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Footer.css"

export default function Footer() {
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
    <div className="footer">
      <div className="info">
        <div className="contact">
          <h2>Muslimah Tech Alliance</h2>
          <p>
            A faith-guided ecosystem for building Muslim women in tech, startups
            and innovation
          </p>

          <div className="icons">
            <img src={FbIcon} alt="" />
            <img src={XIcon} alt="" />
            <img src={LinkedInIcon} alt="" />
          </div>
        </div>

        <div className="company">
          <h2>Company</h2>
          <img src={PurpleBar} alt="" className="purple-bar"/>
          <div className="links">
            <a>
              About Us
            </a>
            <a href="">Mission & Vision</a>
            <a href="">Team</a>
          </div>
        </div>

        <div className="programs">
          <h2>Programs</h2>
          <img src={PurpleBar} alt="" className="purple-bar"/>
          <div className="links">
            <a href="">Muslimah Code Academy</a>
            <a href="">Muslimah Pitch-a-thon</a>
            <a href="">Muslimah Tech Summit</a>
            <a href="">Muslimah Startup Advisory Academy</a>
          </div>
        </div>

        <div className="resources">
          <h2>Resources</h2>
          <img src={PurpleBar} alt=""  className="purple-bar"/>
          <div className="links">
            <a href="">Muslimah Code Academy</a>
            <a href="">Muslimah Pitch-a-thon</a>
            <a href="">Muslimah Tech Summit</a>
            <a href="">Muslimah Startup Advisory Academy</a>
          </div>
        </div>


      </div>

      <hr />

      <div className="copyright">
        <p>&copy; Muslimah Tech Alliance. All rights reserved.</p>
        <div className="policy-terms">
            <a href="">Privacy Policy</a>
            <p>|</p>
            <a href="">Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
}
