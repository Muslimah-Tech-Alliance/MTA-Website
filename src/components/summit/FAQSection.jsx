import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  { question: "Who can attend the summit?", answer: "The summit is open to all Muslim women in tech, from beginners and students to established professionals and startup founders." },
  { question: "Is registration required?", answer: "Yes, registration is mandatory to secure your spot and receive the event link and materials." },
  { question: "Is the summit physical or virtual?", answer: "The Muslimah Tech Summit 2026 is a hybrid event with physical hubs in select cities and global virtual access." },
  { question: "Can founders pitch at the summit?", answer: "Absolutely! Founders can apply for the Pitch-a-thon segment through the registration portal." },
  { question: "Will recordings be shared?", answer: "Yes, registered attendees will have exclusive access to session recordings and workshop resources after the event." },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={false}
      animate={{ backgroundColor: isOpen ? "rgba(116, 100, 177, 0.05)" : "rgba(255, 255, 255, 1)" }}
      className={`mb-4 rounded-2xl border ${isOpen ? 'border-[#6E5A9E]' : 'border-purple-50'} overflow-hidden transition-colors duration-300`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className={`font-semibold text-lg ${isOpen ? 'text-[#6E5A9E]' : 'text-[#121212]'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className={isOpen ? 'text-[#6E5A9E]' : 'text-purple-50'} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginBottom: 20 },
              collapsed: { opacity: 0, height: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-6 pb-6 text-[#212121] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 px-6 md:px-16 lg:px-[7.5rem] bg-white relative">
      {/* Decorative side element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 bg-[#6E5A9E] rounded-r-full hidden lg:block opacity-20" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#121212]">Frequently Asked Questions</h2>
          <p className="text-[#212121] mt-4">Everything you need to know about the summit</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;