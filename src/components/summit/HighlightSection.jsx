import { motion } from 'framer-motion';

const highlights = [
  { id: 1, title: "Keynote Sessions", desc: "Insights from experienced professionals and industry leaders" },
  { id: 2, title: "Panel Discussions", desc: "Conversations on technology, entrepreneurship and ethical innovation" },
  { id: 3, title: "Startup Showcases", desc: "Founders present their products and MVPs to the community, partners and stakeholders" },
  { id: 4, title: "Pitch-a-thon Finals", desc: "Finalist teams pitch live before judges, partners and stakeholders" },
  { id: 5, title: "Networking", desc: "Opportunity to connect with peers, mentors and partners" },
];

const HighlightCard = ({ id, title, desc }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
    whileHover={{ y: -10, boxShadow: "0px 20px 40px rgba(0,0,0,0.05)" }}
    className="bg-purple-50 p-8 rounded-2xl shadow-sm border border-gray-50 flex flex-col items-center text-center transition-all duration-300"
  >
    <div className="w-12 h-12 bg-[#7464B1] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
      {id}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const SummitHighlights = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#121212] mb-2">Summit Highlights</h2>
          <p className="text-[#212121]">What happens at the summit</p>
        </div>

        {/* Grid Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {/* First 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {highlights.slice(0, 3).map((item) => (
              <HighlightCard key={item.id} {...item} />
            ))}
          </div>

          {/* Bottom 2 Items (Centered) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[760px]">
            {highlights.slice(3, 5).map((item) => (
              <HighlightCard key={item.id} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummitHighlights;