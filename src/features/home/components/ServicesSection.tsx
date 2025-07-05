import React from 'react';
import './ServicesSection.scss';

interface Service {
  imageUrl: string;
  title: string;
  description: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4582baa9591a38874bba7319d58e07f850b68811?placeholderIfAbsent=true',
      title: 'Therapy Hub',
      description: 'Your one-stop space for easy access to trusted online mental health counselors and therapists, support, and mental wellness resources.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0acb244668d7ee4a25d3501c2df5dc636bb4719c?placeholderIfAbsent=true',
      title: 'Training & Development Programs',
      description: 'We offer hands-on workshops to boost your soft skills, emotional intelligence, leadership, and communication. Acting as your mental health coach we check in afterward to make sure it really sticks.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b476a72ce2029957b5492dbb148a9c3ed557af73?placeholderIfAbsent=true',
      title: 'Crisis Intervention & Recovery Program',
      description: 'We\'re here to help when things get tough—offering caring support, quick emotional first aid, and a clear plan to help teams heal and rebuild trust together.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbff3a4a9295489cb56b2aa197d3d10667a93668?placeholderIfAbsent=true',
      title: 'Leadership Development Solution',
      description: 'Discover your unique leadership style, grow with personalized coaching, plan your succession with intention, and keep improving step by step through ongoing feedback.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6e975dd21b0b932d9a6e43e9b2225ccef66ae4f9?placeholderIfAbsent=true',
      title: 'Self-Help Tools & Digital Programs',
      description: 'Our easy-to-use app offers simple self-care tips and fun, interactive mental health exercises that help employees build healthy habits, keep track of their progress while on the go.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d6fb1c273aba7835d714e50aad7e7ca0bb3b1432?placeholderIfAbsent=true',
      title: 'Work-Life Balance Services',
      description: 'Find your balance, boost your well-being, and learn how to be strong mentally and psychologically. Our services help you stress less, recharge more, and thrive at work and in life.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5be8e50eaf6ba0e5dbf1634971660944d32190ae?placeholderIfAbsent=true',
      title: 'Research and Analytics Services',
      description: 'We help you monitor emotions in real-time, predict risks, and create leadership-ready reports—all well-integrated with your HR systems.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/743164351126e7d0a1c18f8719421409ec640e8e?placeholderIfAbsent=true',
      title: 'Psychological Safety & Workplace Fear Solutions',
      description: 'Identify hidden mental health challenges, rebuild trust with science-backed tools, and create safe spaces for honest conversation and growth.'
    },
    {
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a8ae52683a1591e67e1bcafef183bea9cd274780?placeholderIfAbsent=true',
      title: 'Refill Health InsightX – Advanced Diagnostics',
      description: 'We help you find hidden gaps in your organization, explore your workplace culture, and understand how your teams work together to drive meaningful improvements.'
    }
  ];

  return (
    <section className="services">
      <div className="section-header">
        <h2 className="section-title">Explore Our Services</h2>
        <h3 className="section-subtitle">Our Services for Better Mental Health</h3>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article key={index} className="service-card">
            <img src={service.imageUrl} alt="Service Image" className="service-img" />
            <div className="service-info">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </div>
            <button className="demo-btn">Schedule a Demo!</button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection; 