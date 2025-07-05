import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const InsurersPage: React.FC = () => {
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
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Insurers
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Transforming Mental Health Coverage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full">
          {[
            {
              title: "Cost Management",
              content: "Optimize mental health coverage costs while ensuring quality care for your members."
            },
            {
              title: "Member Care",
              content: "Provide comprehensive mental health support to your members with our integrated platform."
            },
            {
              title: "Data Analytics",
              content: "Access detailed analytics and insights to make informed decisions about mental health coverage."
            },
            {
              title: "Network Solutions",
              content: "Build and manage a robust network of mental health providers for your members."
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

export default InsurersPage; 