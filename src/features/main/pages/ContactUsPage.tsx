import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const ContactUsPage: React.FC = () => {
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
    { title: "Email Support", content: "contact@refillhealth.com - We respond within 24 hours." },
    { title: "Phone Support", content: "1-800-REFILL - Available Monday to Friday, 9 AM to 6 PM EST." },
    { title: "Live Chat", content: "Chat with our support team in real-time for immediate assistance." },
    { title: "Office Location", content: "123 Wellness Street, Suite 100, New York, NY 10001." },
    { title: "Social Media", content: "Connect with us on LinkedIn, Twitter, and Instagram for updates." },
    { title: "Feedback Form", content: "Share your thoughts and suggestions to help us improve." }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop">
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
          Contact Us
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 80 }}
          className="text-xl text-center mb-4" style={{ color: '#6C5CE7' }}
        >
          We're here to help and answer any questions
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 80 }}
          className="text-center text-gray-700 mb-10 max-w-2xl bg-white/70 rounded-lg px-6 py-4 shadow-md backdrop-blur-sm"
        >
          Get in touch with our team through any of the channels below. We're committed to providing you with the support and information you need to make the most of our services.
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

export default ContactUsPage; 