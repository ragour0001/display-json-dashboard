import React, { useState } from 'react';
import './UniqueOfferings.scss';

interface Service {
  title: string;
  description: string;
  visited: boolean;
}

const UniqueOfferings: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      title: 'Advanced Organizational Audits',
      description: 'We uncover hidden gaps, decode your workplace culture, and compare team dynamics helping you build stronger, more unified organizations with mental wellness solutions.',
      visited: false
    },
    {
      title: 'Research & Analytics Services',
      description: 'Access real-time mental wellness analytics, early challenge detection, and clear, actionable reports seamlessly integrated with your HR systems.',
      visited: false
    },
    {
      title: 'Refill Health EAP 360°',
      description: 'A personalized employee wellness program that meets every team\’s unique needs delivering mental health support anytime, anywhere.',
      visited: false
    },
    {
      title: 'Psychological Safety & Workplace Fear Solutions',
      description: 'We find hidden psychological barriers, rebuild trust, and provide science-driven workplace stress management strategies for optimum growth.',
      visited: false
    },
    {
      title: 'POSH (Prevention of Sexual Harassment) Compliance Services',
      description: 'We offer legally compliant training, help create your Internal Committee (IC), manage cases, and create a harassment-free, psychologically safe workplace.',
      visited: false
    },
    {
      title: 'Customized Organizational Wellness Solutions',
      description: 'Personalized support at every level  integrating burnout prevention solutions, resilience training, and AI-driven insights to align with your CSR/ESG goals.',
      visited: false
    }
  ]);

  const handleCardHover = (index: number) => {
    const updatedServices = [...services];
    updatedServices[index] = { ...updatedServices[index], visited: true };
    setServices(updatedServices);
  };

  return (
    <section className="offerings-section">
      <h2 className="offerings-title">Our Unique Mental Wellness Solutions for You</h2>
      <div className="offerings-grid">
        {services.map((service, index) => (
          <article
            key={index}
            className={`service-card ${service.visited ? 'visited' : ''}`}
            onMouseEnter={() => handleCardHover(index)}
          >
            <header className="service-header">
              <h3 className="service-title">{service.title}</h3>
            </header>
            <p className="service-description">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default UniqueOfferings; 