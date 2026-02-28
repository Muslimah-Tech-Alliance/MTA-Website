import { motion } from "framer-motion";
import MissionPic from "../../assets/Landing Page Pics/MissionPic.png";
import VisionPic from "../../assets/Landing Page Pics/VisionPic.png";
import "../../styles/Landing Page Styles/About.css";

export default function AboutUs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <motion.div
      id="about-us"
      className="about-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="about-heading" variants={fadeInUp}>
        <h1>About Us</h1>
        <p>
          Muslimah Tech Alliance (MTA) is a faith-guided ecosystem for building
          Muslim women in tech, startups, and innovation.
        </p>
      </motion.div>

      <div id="mission-vision" className="mission-and-vision">
        <motion.div className="mission-section" variants={fadeInLeft}>
          <h2>Our Mission</h2>
          <p>
            To provide structured pathways from skills to startups for Muslim
            women through education, mentorship, funding access, and advisory
            support.
          </p>
          <motion.img
            src={MissionPic}
            alt="Mission"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <motion.div className="vision-section" variants={fadeInRight}>
          <h2>Our Vision</h2>
          <p>
            To raise a generation of Muslim women who are technically skilled,
            ethically grounded, and economically empowered to build solutions
            for the future.
          </p>
          <motion.img
            src={VisionPic}
            alt="Vision"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}