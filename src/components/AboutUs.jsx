import MissionPic from "../assets/MissionPic.png";
import VisionPic from "../assets/VisionPic.png";
import "../styles/About.css";

export default function AboutUs() {
  return (
    <div id="about-us" className="about-section">
      <div className="about-heading">
        <h1>About Us</h1>
        <p>
          Muslimah Tech Alliance (MTA) is a faith-guided ecosystem for building
          Muslim women in tech, startups, and innovation.{" "}
        </p>
      </div>

      <div className="mission-and-vision">
        <div className="mission-section">
          <h2>Our Mission</h2>
          <p>
            To provide structured pathways from skills to startups for Muslim
            women through education, mentorship, funding access, and advisory
            support.
          </p>
          <img src={MissionPic} alt="" />
        </div>

        <div className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To raise a generation of Muslim women who are technically skilled,
            ethically grounded, and economically empowered to build solutions
            for the future.
          </p>
          <img src={VisionPic} alt="" />
        </div>
      </div>
    </div>
  );
}
