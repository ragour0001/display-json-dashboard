import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const TermsOfServicePage: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.5,
        type: 'spring',
        stiffness: 80
      }
    })
  };

  const cards = [
    { title: "User Agreement", content: "Terms and conditions for using our platform and services." },
    { title: "Service Usage", content: "Guidelines for appropriate use of our mental health services." },
    { title: "Account Terms", content: "Rules and responsibilities for maintaining your account." },
    { title: "Intellectual Property", content: "Our rights and your rights regarding content and materials." },
    { title: "Limitations", content: "Limitations of liability and service availability." },
    { title: "Termination", content: "Conditions under which accounts or services may be terminated." }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{}}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
          className="text-4xl font-bold text-center mb-2" style={{ color: '#6C5CE7' }}
        >
          Terms of Service
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 80 }}
          className="text-xl text-center mb-4" style={{ color: '#6C5CE7' }}
        >
          Understanding our service agreement
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 80 }}
          className="text-center text-gray-700 mb-10 max-w-2xl bg-white/70 rounded-lg px-6 py-4 shadow-md backdrop-blur-sm"
        >
          These terms of service outline the rules, guidelines, and agreements for using Refill Health's platform and services. By accessing our services, you agree to these terms and conditions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(108,92,231,0.15)' }}
              className="bg-[#F2E6FF] rounded-xl shadow-lg p-7 hover:shadow-2xl transition-all mx-auto max-w-xl border border-[#e0d7fa]"
            >
              <h2 className="text-2xl font-semibold mb-3 text-gray-600">{card.title}</h2>
              <p className="text-gray-600">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageBackground>
  );
};

export default TermsOfServicePage; 