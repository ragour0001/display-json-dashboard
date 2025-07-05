import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const CustomizedOrganizationalWellnessSolutionsPage: React.FC = () => {
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
    { title: "Tailored Wellness Programs", content: "Custom-designed wellness initiatives to meet your organization's unique needs." },
    { title: "Onsite & Virtual Wellness Events", content: "Engaging events to promote health and well-being among employees." },
    { title: "Health Risk Assessments", content: "Identify and address health risks with comprehensive assessments." },
    { title: "Nutrition & Fitness Guidance", content: "Expert advice and programs for better nutrition and physical activity." },
    { title: "Mental Health Support", content: "Access to counseling and resources for mental well-being." },
    { title: "Ongoing Program Evaluation", content: "Continuous monitoring and improvement of wellness initiatives." }
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
          Customized Organizational Wellness Solutions
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Wellness programs designed for your unique workplace.
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

export default CustomizedOrganizationalWellnessSolutionsPage; 