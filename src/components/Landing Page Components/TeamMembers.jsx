import { motion } from "framer-motion";
import FbIcon from "../../assets/Social icons/fb-icon1.png";
import LinkedinIcon from "../../assets/Social icons/Linkedin-icon1.png";
import XIcon from "../../assets/Social icons/x-icon1.png";
import MemberPic from "../../assets/Landing Page Pics/Profile-placeholder.png";
import ProfileRectangle from "../../assets/Landing Page Pics/Profile-rectangle.png";
import "../../styles/Landing Page Styles/TeamMembers.css";

const teamMembers = [
  { name: "Mariam Bello", role: "Founder" },
  { name: "Mariam Bello", role: "Founder" },
  { name: "Mariam Bello", role: "Founder" },
  { name: "Mariam Bello", role: "Founder" },
  { name: "Mariam Bello", role: "Founder" },
];

export default function TeamMembers() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="team-section"
      id="team"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 variants={cardVariants}>Meet Our Team Members</motion.h1>
      <div className="profiles">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className={`profile-card ${index % 2 === 0 ? "low left" : "high right"}`}
            variants={cardVariants}
            whileHover={{ scale: 1.05, zIndex: 2 }}
          >
            <img src={MemberPic} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <motion.div
              className="social-links"
              variants={socialVariants}
              initial="hidden"
              whileHover="visible"
            >
              <img src={ProfileRectangle} alt="" />
              <img src={FbIcon} alt="Facebook" />
              <img src={LinkedinIcon} alt="LinkedIn" />
              <img src={XIcon} alt="X/Twitter" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}