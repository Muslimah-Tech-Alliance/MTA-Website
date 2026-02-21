import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react'; // Elegant check icons

const categories = [
  "Aspiring Muslim women in tech",
  "Startup founders and teams",
  "Mentors and advisors",
  "Developers, designers and product professionals",
  "Students interested in tech and innovation"
];

const WhoSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Who Should Attend?
        </motion.h2>

        {/* Purple Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#7464B1] rounded-[2rem] p-8 md:p-16 shadow-2xl overflow-hidden relative"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {categories.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  type: "spring", 
                  stiffness: 100 
                }}
                whileHover={{ scale: 1.03 }}
                className="bg-white px-6 py-4 rounded-xl flex items-center space-x-3 shadow-md"
              >
                <CheckCircle2 className="text-[#7464B1] w-5 h-5 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-sm md:text-base">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoSection;