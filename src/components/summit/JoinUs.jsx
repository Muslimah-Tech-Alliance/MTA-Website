import { motion } from 'framer-motion';

const JoinUs = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative max-w-6xl mx-auto rounded-[3rem] bg-[#7464B1] p-12 md:p-20 text-center text-white overflow-hidden shadow-2xl"
      >
        {/* Animated Background Gradients */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[500px] h-[500px] bg-purple-400 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-indigo-400 rounded-full blur-[120px] pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
          >
            Ready To Join Us For The 2026 Muslimah Tech Summit?
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(255, 255, 255, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(255,255,255,0)", "0px 0px 20px rgba(255,255,255,0.2)", "0px 0px 0px rgba(255,255,255,0)"]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity }
              }}
              className="px-12 py-5 bg-white text-[#7464B1] text-lg font-bold rounded-full shadow-xl transition-colors hover:bg-gray-50"
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinUs;