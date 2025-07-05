import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const POSHComplianceServicesPage: React.FC = () => {
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
    { title: "POSH Policy Drafting", content: "Develop and implement robust POSH policies tailored to your organization." },
    { title: "Awareness & Sensitization Training", content: "Educate employees on POSH laws and respectful workplace behavior." },
    { title: "Internal Committee Formation", content: "Assist in setting up and training Internal Committees as per legal requirements." },
    { title: "Complaint Handling & Redressal", content: "Support in managing and resolving POSH-related complaints effectively." },
    { title: "Annual Compliance Audits", content: "Ensure your organization meets all POSH compliance obligations annually." },
    { title: "Legal Advisory & Support", content: "Expert legal guidance for complex POSH cases and ongoing compliance." }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          POSH (Prevention of Sexual Harassment) Compliance Services
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Ensuring a safe and respectful workplace for all.
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

export default POSHComplianceServicesPage; 