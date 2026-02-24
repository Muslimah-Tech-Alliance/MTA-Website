import { motion } from 'framer-motion';

const JoinUs = () => {
  return (
    <section className="lg:py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[3rem] py-20 px-8 text-center relative overflow-hidden bg-slate-50 border border-slate-100 shadow-sm"
      >
        {/* Animated Background Blobs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-40 pointer-events-none"
        />

        <div className="relative z-10">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-medium text-[#121212] mb-8 leading-tight tracking-tight"
          >
            Ready To Join Us For The 2026 <br className="hidden md:block" />
            <span className="text-[#6E5A9E]">Muslimah Tech Summit?</span>
          </motion.h2>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "#5D4E99",
                boxShadow: "0px 15px 30px rgba(116, 100, 177, 0.3)" 
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-16 py-3 bg-[#6E5A9E] text-white font-normal text-lg rounded-full transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer Effect on Button */}
              <span className="relative z-10">Register Now</span>
              <motion.div 
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 bg-white/20 skew-x-12"
              />
            </motion.button>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-gray-400 text-sm font-medium"
          >
            Limited slots available. Secure yours today!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinUs;