import { motion } from 'framer-motion';

const AboutSection = () => {
  const processSteps = ["Learn", "Build", "Pitch", "Scale"];

  return (
    <section className="w-full py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16"
        >
          About The Summit
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Tech Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="/images/summit/about.svg" 
              alt="Technology Connection" 
              className="w-full rounded-3xl shadow-xl border border-gray-100"
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-6 text-gray-700 text-sm md:text-base leading-relaxed"
          >
            <p>
              The Muslimah Tech Summit is an annual gathering designed to bring together Muslim women 
              in technology, startups and innovation. The summit provides a platform for learning, 
              collaboration, product showcases and live pitching: connecting founders, professionals, 
              mentors and partners within the MTA ecosystem.
            </p>
            <p>
              The Summit serves as a central gathering point within the Muslimah Tech Alliance ecosystem, 
              bringing together participants from the Code Academy, The Pitch-a-thon and the Startup 
              Advisory program to share progress, showcase innovation and build long term partnerships.
            </p>

            {/* Process Flow */}
            <div className="pt-8 flex items-center justify-between md:justify-start md:space-x-4">
              {processSteps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <motion.span 
                    whileHover={{ y: -5, color: "#7464B1" }}
                    className="px-4 py-2 bg-purple-50 text-[#7464B1] text-xs font-semibold rounded-md border border-purple-100"
                  >
                    {step}
                  </motion.span>
                  {index !== processSteps.length - 1 && (
                    <span className="mx-2 text-gray-300">──▶</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;