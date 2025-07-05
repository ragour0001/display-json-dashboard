import React, { useEffect } from 'react';
import AOS from 'aos';
import './WhyDifferent.scss';
import 'aos/dist/aos.css';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const WhyDifferent: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Science-Backed',
      description: 'Our resources and online therapy we offer are grounded in psychology and data.',
      icon: 'assets/images/why-different/science-backed.svg'
    },
    {
      title: 'Fully Customized',
      description: 'No one-size-fits-all — we tailor solutions to each client.',
      icon: 'assets/images/why-different/fully-custom.svg'
    },
    {
      title: 'Insight X Tools',
      description: 'We uncover hidden stresses and turn insights into action.',
      icon: 'assets/images/why-different/insightx.svg'
    },
    {
      title: 'Measurable Impact',
      description: 'We track participation and improvements for real results.',
      icon: 'assets/images/why-different/meditation-outline.svg'
    },
    {
      title: 'Built for Business',
      description: 'Our solutions fit and grow with your team.',
      icon: 'assets/images/why-different/built_for_business.svg'
    },
    {
      title: 'All-in-One Support',
      description: 'Therapy, self-help, crisis aid, and training — all in one place.',
      icon: 'assets/images/why-different/bx_support.svg'
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section className="why-different">
      <h2 className="section-title animate-fade-in">
        <b>Why We&apos;re <span className="different-highlight">Different</span></b>
      </h2>
      
      <div className="features-grid">
        {features.map((feature, i) => (
          <div
            key={i}
            className="feature-card animate-scale-in"
            style={{ animationDelay: `${i * 0.2}s` }}
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <div className="icon-container">
              <img src={feature.icon} alt={feature.title} className="feature-icon" />
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyDifferent; 