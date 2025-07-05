import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const IndividualsPage: React.FC = () => {
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
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Individuals
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Your Personal Mental Health Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full">
          {[
            {
              title: "Personal Growth",
              content: "Access tools and resources to support your mental well-being journey. Track your progress and celebrate achievements."
            },
            {
              title: "Professional Support",
              content: "Connect with qualified mental health professionals who can guide you through your challenges."
            },
            {
              title: "Community",
              content: "Join a supportive community of individuals on similar journeys. Share experiences and learn from others."
            },
            {
              title: "Wellness Tools",
              content: "Utilize our comprehensive suite of wellness tools designed to enhance your mental health and well-being."
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

export default IndividualsPage; 