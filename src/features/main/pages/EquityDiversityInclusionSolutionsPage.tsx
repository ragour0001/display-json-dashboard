import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const EquityDiversityInclusionSolutionsPage: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const cards = [
    { title: "Inclusive Leadership Training", content: "Empower leaders to foster equity and inclusion at every level." },
    { title: "Bias Awareness Workshops", content: "Identify and address unconscious bias in the workplace." },
    { title: "Diversity Recruitment Strategies", content: "Attract and retain diverse talent with effective recruitment practices." },
    { title: "Cultural Competency Programs", content: "Build understanding and respect for all backgrounds and perspectives." },
    { title: "Employee Resource Groups", content: "Support and connect employees through affinity and resource groups." },
    { title: "EDI Policy Development", content: "Create and implement policies that promote equity, diversity, and inclusion." }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Equity, Diversity, and Inclusion (EDI) Solutions
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Building a workplace where everyone belongs.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              className="bg-[#F2E6FF] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all mx-auto max-w-xl"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-600">{card.title}</h2>
              <p className="text-gray-600">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageBackground>
  );
};

export default EquityDiversityInclusionSolutionsPage; 