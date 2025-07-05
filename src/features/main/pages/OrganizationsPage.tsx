import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const OrganizationsPage: React.FC = () => {
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

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full px-0 py-8 flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Organizations
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Empowering Your Workforce
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full">
          {[
            {
              title: "Employee Wellness",
              content: "Comprehensive mental health support for your workforce. Improve productivity and reduce absenteeism."
            },
            {
              title: "Workplace Culture",
              content: "Build a supportive and inclusive workplace environment that promotes mental well-being."
            },
            {
              title: "Leadership Support",
              content: "Equip your leaders with tools to support their teams' mental health and well-being."
            },
            {
              title: "ROI Focus",
              content: "Measure and track the impact of mental health initiatives on your organization's success."
            }
          ].map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              className="bg-[#F2E6FF] rounded-lg shadow-lg p-6 hover:shadow-xl transition-all mx-auto"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-600">{card.title}</h2>
              <p className="text-gray-600">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageBackground>
  );
};

export default OrganizationsPage; 