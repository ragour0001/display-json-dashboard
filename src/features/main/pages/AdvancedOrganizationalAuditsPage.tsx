import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const AdvancedOrganizationalAuditsPage: React.FC = () => {
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
    {
      title: "Comprehensive Risk Assessment",
      content: "Identify and mitigate risks across all organizational domains with our thorough risk assessment process."
    },
    {
      title: "Process Optimization",
      content: "Streamline your workflows and improve efficiency with data-driven process optimization strategies."
    },
    {
      title: "Regulatory Compliance Review",
      content: "Ensure your organization meets all industry regulations and standards with our compliance audits."
    },
    {
      title: "Employee Engagement Analysis",
      content: "Gauge employee satisfaction and engagement to foster a positive and productive workplace culture."
    },
    {
      title: "Technology & Security Audit",
      content: "Evaluate your IT infrastructure and security protocols to safeguard your organization from threats."
    },
    {
      title: "Leadership & Governance Evaluation",
      content: "Assess leadership effectiveness and governance structures to drive organizational success."
    }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Advanced Organizational Audits
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Comprehensive audit solutions for modern organizations.
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

export default AdvancedOrganizationalAuditsPage; 