import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-[10rem] gap-[2rem] items-center">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-[1rem]"
        >
          <h1 className="text-4xl md:text-[2.6rem] font-bold text-[#121212] leading-tight">
            Muslimah Tech Summit
          </h1>
          
          <p className="text-lg md:text-[0.9rem] text-[#212121] font-normal max-w-lg leading-relaxed">
            A gathering of Muslim women in technology, startups and innovation 
            to share knowledge, showcase solutions and build meaningful connections.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#6E5A9E" }}
            whileTap={{ scale: 0.95 }}
            className="w-[14.4rem] px-10 py-4 bg-[#7464B1] text-white text-[1rem] font-medium rounded-full shadow-lg transition-colors"
          >
            Register Now
          </motion.button>
        </motion.div>

        {/* Right Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative group"
        >
          {/* Subtle decorative background glow */}
          <div className="absolute -inset-4 bg-purple-100 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <img 
              src="/images/summit/hero.svg" 
              alt="Muslimah Tech Summit Event" 
              className="w-full h-auto rounded-[2rem] shadow-2xl object-cover transform transition duration-500 group-hover:scale-[1.02]"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;