import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const RefillHealthEAP360Page: React.FC = () => {
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
    { title: "Comprehensive Employee Assistance", content: "Holistic support for employees' mental, emotional, and social well-being." },
    { title: "24/7 Counseling Services", content: "Access to professional counseling anytime, anywhere for immediate support." },
    { title: "Work-Life Balance Programs", content: "Initiatives to help employees manage stress and maintain a healthy work-life balance." },
    { title: "Manager Training & Support", content: "Equip managers with tools to support their teams' mental health effectively." },
    { title: "Crisis Intervention", content: "Immediate response and support for workplace crises and emergencies." },
    { title: "Wellness Workshops & Webinars", content: "Regular sessions to promote mental health awareness and resilience." }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Refill Health EAP 360°
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          All-round Employee Assistance Program for holistic well-being.
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

export default RefillHealthEAP360Page; 