import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';

const ResearchAndAnalyticsPage: React.FC = () => {
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
      title: "Market Research",
      content: "Gain insights into market trends and customer preferences to drive strategic decisions."
    },
    {
      title: "Data Analytics",
      content: "Leverage advanced analytics to uncover patterns and opportunities within your organization."
    },
    {
      title: "Performance Metrics",
      content: "Track and measure key performance indicators to ensure continuous improvement."
    },
    {
      title: "Customer Feedback Analysis",
      content: "Analyze customer feedback to enhance products, services, and overall satisfaction."
    },
    {
      title: "Predictive Modeling",
      content: "Utilize predictive models to forecast trends and make proactive business decisions."
    },
    {
      title: "Reporting & Visualization",
      content: "Transform complex data into actionable insights with clear and interactive reports."
    }
  ];

  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full flex flex-col items-center justify-center min-h-screen"
      >
        <h1 className="text-4xl font-bold text-center mb-4" style={{ color: '#6C5CE7' }}>
          Research and Analytics
        </h1>
        <h2 className="text-xl text-center mb-8" style={{ color: '#6C5CE7' }}>
          Data-driven insights for organizational growth.
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

export default ResearchAndAnalyticsPage; 