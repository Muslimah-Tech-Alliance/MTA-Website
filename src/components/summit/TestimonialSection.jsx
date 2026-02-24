import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sultanat",
    role: "Winning Pitch Contestant",
    year: "Summit 2025",
    content: "I especially loved the 3-day boot camp. Even though I have pitched before and I know how to create a deck, I still learnt so much. The sessions were enlightening, practical and timely."
  },
  {
    name: "Aisha",
    role: "Pitch Contestant",
    year: "Summit 2025",
    content: "The event was insightful and I loved hearing from lecturers and fellow participants. It's amazing to see Islamic events like this that foster community and growth. I am giving the event a solid 100/100"
  },
  {
    name: "Nimot",
    role: "Attendee",
    year: "Summit 2025",
    content: "The event was amazing and really insightful. I really commend the team for bringing up this idea. It is not something you see everyday. And I hope to see more of this in the future in shaa Allaah"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 lg:py-24 px-6 md:px-16 lg:px-[7.5rem] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#121212]"
          >
            What Past Attendees Say
          </motion.h2>
        </div>

        <div className="flex flex-nowrap overflow-x-auto pb-8 gap-6 snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 md:gap-8 md:items-center md:overflow-visible">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`min-w-[85%] sm:min-w-[60%] snap-center md:min-w-0 ${index === 1 ? 'md:-mt-12' : 'mt-0'}`}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0px 20px 50px rgba(116, 100, 177, 0.15)" 
                }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg md:shadow-xl relative group h-full flex flex-col"
              >
                {/* Quote Icon */}
                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="mb-6 inline-block"
                >
                  <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#7464B1] opacity-80" fill="#6E5A9E" />
                </motion.div>

                <p className="text-[#212121] italic mb-8 leading-relaxed text-sm md:text-base">
                  "{t.content}"
                </p>

                <div className="mt-auto">
                  <h4 className="font-bold text-[#212121]">{t.name}</h4>
                  <p className="text-[#6E5A9E] text-xs font-semibold uppercase tracking-wider">
                    {t.role}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">{t.year}</p>
                </div>

                {/* purple dot */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-200 rounded-full group-hover:bg-[#7464B1] transition-colors" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* To hide the scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;