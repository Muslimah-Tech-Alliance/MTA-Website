import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CodeAcademy from "../../assets/Landing Page Pics/code-academy-icon.png";
import Pitch from "../../assets/Landing Page Pics/pitch-icon.png";
import TechSummit from "../../assets/Landing Page Pics/tech-summit-icon.png";
import StartupAdvisory from "../../assets/Landing Page Pics/startup-advisory-icon.png";
import "../../styles/Landing Page Styles/Programs.css";

const programs = [
  {
    img: CodeAcademy,
    title: "Muslimah Code Academy",
    desc: "A 3-month intensive, mentorship based program specifically for Muslim women in tech who are at an above-beginner level",
    link: "/code-academy",
  },
  {
    img: Pitch,
    title: "Muslimah Pitch-a-thon",
    desc: "A structured competition designed to transition technical products into validated fundable products",
    link: "/pitch-a-thon",
  },
  {
    img: TechSummit,
    title: "Muslimah Tech Summit",
    desc: "The flagship annual gathering of MTA designed to inspire the community and showcase innovation",
    link: "/summit",
  },
  {
    img: StartupAdvisory,
    title: "Muslimah Startup Advisory Academy",
    desc: "It provides the specialized business and legal framework necessary to turn a technical product into a sustainable company",
    link: "/startup-advisory",
  },
];

export default function Programs() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="programs"
      className="programs-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1 variants={cardVariants}>Our Programs</motion.h1>
      <div className="programs-list">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="each-program"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
            }}
          >
            <img src={program.img} alt={program.title} />
            <h2>{program.title}</h2>
            <p>{program.desc}</p>
            <Link to={program.link}>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#5D4E99" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
