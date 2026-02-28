import { motion } from "framer-motion";
import Partner from "../../assets/Landing Page Pics/PartnerCompanyPlaceholder.png";
import "../../styles/Landing Page Styles/Partners.css";

const partners = Array(8).fill({ img: Partner, name: "Partner Company" });

export default function Partners() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="partners"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h1 variants={logoVariants}>Our Partners</motion.h1>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <motion.img
            key={index}
            src={partner.img}
            alt={partner.name}
            variants={logoVariants}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </motion.div>
  );
}