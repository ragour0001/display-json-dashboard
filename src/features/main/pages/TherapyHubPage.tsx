import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const TherapyHubPage: React.FC = () => {
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
    { title: "Licensed Therapists", content: "Connect with certified professionals for personalized mental health support." },
    { title: "Confidential Sessions", content: "Your privacy is our priority. All sessions are secure and confidential." },
    { title: "Flexible Scheduling", content: "Book sessions at your convenience, including evenings and weekends." },
    { title: "Diverse Specializations", content: "Find therapists with expertise in anxiety, depression, relationships, and more." },
    { title: "Progress Tracking", content: "Monitor your mental health journey with easy-to-use progress tools." },
    { title: "Resource Library", content: "Access articles, videos, and self-help tools curated by experts." }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=2070&auto=format&fit=crop">
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
          Therapy Hub
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 80 }}
          className="text-xl text-center mb-4" style={{ color: '#6C5CE7' }}
        >
          Your gateway to expert mental health support
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 80 }}
          className="text-center text-gray-700 mb-10 max-w-2xl bg-white/70 rounded-lg px-6 py-4 shadow-md backdrop-blur-sm"
        >
          Welcome to the Therapy Hub, where compassionate professionals and innovative tools empower you to take charge of your mental well-being. Whether you're seeking guidance, support, or resources, our platform is designed to help you thrive in every aspect of life.
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

export default TherapyHubPage; 