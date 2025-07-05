import React from 'react';
import HeroSection from '../components/HeroSection';
import UniqueOfferings from '../components/UniqueOfferings';
import AboutSection from '../components/AboutSection';
import InsightsSection from '../components/InsightsSection';
import DiagnosticsSuite from '../components/DiagnosticsSuite';
import MentalHealthServices from '../components/MentalHealthServices';
import SolutionsSection from '../components/SolutionsSection';
import MobileAppFeatures from '../components/MobileAppFeaturesComponent';
import TherapyHub from '../components/TherapyHub';
import HowItWorks from '../components/HowItWorks';
import WhyDifferent from '../components/WhyDifferent';
import ContactForm from '../components/ContactForm';
import LatestFromRefillHealth from '../components/LatestFromRefillHealth';
import FAQSection from '../components/FAQSection';
import './HomePage.scss';

const HomePage: React.FC = () => {
  return (
    <main className="w-full m-0 p-0 bg-[#FBFAFF] flex flex-col min-w-full relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Unique Offerings Section */}
      <UniqueOfferings />

      {/* About Section */}
      <AboutSection />

      {/* Insights Section */}
      <InsightsSection />

      {/* Diagnostics Suite Section */}
      <DiagnosticsSuite />

      {/* Mental Health Services Section */}
      <MentalHealthServices />

      {/* Solutions Section */}
      <SolutionsSection />

      {/* Mobile App Features Section */}
      <MobileAppFeatures />

      {/* Therapy Hub Section */}
      <TherapyHub />
      
      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      {/*<Testimonials />*/}
      
      {/* Why Different Section */}
      <WhyDifferent />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Latest From Refill Health Section */}
      <LatestFromRefillHealth />

      {/* FAQ Section */}
      <div className="w-full" style={{ backgroundColor: '#eae5ff' }}>
        <FAQSection />
      </div>
    </main>
  );
};

export default HomePage; 