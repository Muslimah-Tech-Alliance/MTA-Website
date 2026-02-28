import { motion } from "framer-motion";
import "../../styles/Landing Page Styles/Header.css";

export default function Header() {
  return (
    <div className="header">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Building the Next Generation of Muslim Women in Tech & Innovation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We provide structured pathways that equip Muslim women with the skills,
        mentorship and support to build impactful tech solutions and sustainable startups
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.05, backgroundColor: "#593f82" }}
        whileTap={{ scale: 0.95 }}
      >
        Explore Our Programs
      </motion.button>

    </div>
  );
}