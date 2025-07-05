import React from 'react';
import { motion } from 'framer-motion';
import PageBackground from '@/components/shared/PageBackground';
import TherapistOnboarding from '@/features/therapist-onboarding/components/TherapistOnboarding';

const TherapistOnboardingPage: React.FC = () => {
  return (
    <PageBackground backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop">
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-800">Therapist Onboarding</h1>
          <p className="text-lg text-gray-600 mt-2">Welcome to Refill Health! Here's everything you need to get started.</p>
        </motion.div>
        <TherapistOnboarding />
      </div>
    </PageBackground>
  );
};

export default TherapistOnboardingPage; 