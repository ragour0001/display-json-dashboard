import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';

interface Card {
  title: string;
  description: string;
  icon: string;
}

interface Tab {
  label: string;
  cards: Card[];
}

const MentalHealthServices: React.FC = () => {
  const { trackSectionView, trackTabChange, trackServiceSelection } = useGoogleAnalytics();
  
  const tabs: Tab[] = [
    { 
      label: 'Therapy & Self-Help Tools', 
      cards: [
        { title: 'Therapy Hub', description: 'Access trusted online therapy, mental health coaches, and wellness resources in one convenient place.', icon: 'assets/images/mental-health-service/therapy-hub.svg' },
        { title: 'Self-Help Tools & Digital Programs', description: 'Our mental health app offers guided meditation, cognitive behavioral therapy techniques, and interactive exercises for self-care on the go.', icon: 'assets/images/mental-health-service/self-help.svg' },
        { title: 'Self-Help Pro Toolkit', description: 'Empower yourself with easy-to-use resources, mental health exercises, and training to take charge of your own well-being.', icon: 'assets/images/mental-health-service/self-help-toolkit.svg' },
        { title: 'Meditation Mastery Suite', description: 'A toolkit with guided meditation practices, expert lessons, and exercises to help you find clarity and peace.', icon: 'assets/images/mental-health-service/meditate.svg' },
        { title: 'Feel Better in Under 90 Seconds Toolkit', description: 'We offer you a set of quick, evidence-based effective tools and techniques to manage stress and boost mood anytime, anywhere.', icon: 'assets/images/mental-health-service/feel-better.svg' },
        { title: 'Discover Yourself', description: 'Our tool offers prompts and activities to help you celebrate your uniqueness and grow at your own pace.', icon: 'assets/images/mental-health-service/discover.svg' }
      ]
    },
    { 
      label: 'Employee Well-being & Recovery Support', 
      cards: [
        { title: 'Work-Life Balance Services', description: 'Reduce stress, improve sleep with guided meditations for better sleep, and boost well-being with expert support.', icon: 'assets/images/mental-health-service/work-life.svg' },
        { title: 'Psychological Safety & Workplace Fear Solutions', description: 'We help you uncover mental health challenges, rebuild trust, and create safe spaces for open conversation and growth in the workplace.', icon: 'assets/images/mental-health-service/psyc-safety.svg' },
        { title: 'Tailored Organizational Wellness Solutions', description: 'Support employee well-being, burnout recovery, and resilience with science-backed strategies.', icon: 'assets/images/mental-health-service/tailored.svg' },
        { title: 'POSH Compliance & Safe Workplace Solutions', description: 'We offer legal training, set up Internal Committees, and provide guidance to prevent harassment and promote respect at work.', icon: 'assets/images/mental-health-service/posh.svg' },
        { title: 'Crisis Intervention & Recovery Program', description: 'We provide emotional first aid and recovery plans, supporting individuals and teams with 24/7 mental health support.', icon: 'assets/images/mental-health-service/crisis-recovery.svg' },
      ]
    },
    { 
      label: 'Leadership, Training & Development', 
      cards: [
        { title: 'Training & Development Programs', description: 'Enhance empathetic skills, emotional intelligence, leadership, and communication through expert-led mental health workshops for organizations.', icon: 'assets/images/mental-health-service/training.svg' },
        { title: 'Behavior Change & Workforce Optimization Solutions', description: 'We address issues like absenteeism, addiction, and disengagement by identifying root causes and providing targeted support for a healthier workplace.', icon: 'assets/images/mental-health-service/behaviour.svg' },
        { title: 'Leadership Development Solution', description: 'Drive engagement, resolve conflicts, and boost productivity through personalized coaching and employee burnout prevention solutions.', icon: 'assets/images/mental-health-service/leadership.svg' },
      ]
    },
    { 
      label: 'Insights & Analytics Tools', 
      cards: [
        { title: 'Track your daily Mood, Sleep and Energy and Get Valuable Insights with AI', description: 'Gain personalized insights and actionable tips driven by powerful AI technology to optimize your daily well-being.', icon: 'assets/images/mental-health-service/track.svg' },
        { title: 'Research and Analytics Services', description: 'Track emotional trends, predict risks, and deliver insights improving how to support mental health in the workplace.', icon: 'assets/images/mental-health-service/research.svg' },
        { title: 'Mental Wellness Assessments', description: 'Quick, evidence-based checks to identify your strengths and areas for improvement in mental health.', icon: 'assets/images/mental-health-service/mental-wellness.svg' }
      ]
    }
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [slideInterval, setSlideInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    checkScreenSize();
    startAutoSlide();
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
    trackSectionView('mental_health_services');

    const handleResize = () => checkScreenSize();
    window.addEventListener('resize', handleResize);

    return () => {
      if (slideInterval) clearInterval(slideInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const startAutoSlide = () => {
    const interval = setInterval(() => {
      setActiveTabIndex(prev => (prev + 1) % tabs.length);
    }, 10000); // 10 seconds
    setSlideInterval(interval);
  };

  const restartAutoSlide = () => {
    if (slideInterval) clearInterval(slideInterval);
    startAutoSlide();
  };

  const selectTab = (index: number) => {
    setActiveTabIndex(index);
    trackTabChange(tabs[index].label, 'mental_health_services');
    restartAutoSlide();
  };

  const onCardClick = (cardTitle: string) => {
    trackServiceSelection(cardTitle);
  };

  const activeCards = tabs[activeTabIndex].cards;

  return (
    <section className="services-container">
      <div className="content-wrapper">
        <h2 data-aos="fade-up">Our Mental Health Services</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Whether for yourself, your team, or your organization, we're here to help. Explore how our mental wellness services can make a positive impact.
        </p>

        <div className="tabs" data-aos="fade-up" data-aos-delay="200">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={i === activeTabIndex ? 'active' : ''}
              onClick={() => selectTab(i)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="cards-wrapper">
          {activeCards.map((card, idx) => (
            <div
              className="card"
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={100 * idx}
              onClick={() => onCardClick(card.title)}
            >
              <img src={card.icon} alt={card.title} className="icon" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-container {
          text-align: center;
          padding: 2rem 1rem;
          max-width: 100%;
          margin: 0;
          background-image: url('/assets/images/how-it-works-frame.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-color: #F9F8FF;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          left: 0;
          right: 0;
          position: relative;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        h2 {
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 0.5rem;
          padding: 0 1rem;
          letter-spacing: 0.5px;
        }

        p {
          font-family: "Nunito", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          max-width: 800px;
          margin: 0 auto 2rem;
          color: #555;
          padding: 0 1rem;
        }

        .tabs {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
          overflow-x: auto;
        }

        .tabs button {
          padding: 0.75rem 2rem;
          min-width: 200px;
          border: 1px solid #6C5CE7;
          background: white;
          border-radius: 20px;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
          font-size: 1rem;
          white-space: nowrap;
          color: #6C5CE7;
        }

        .tabs button:hover {
          background: rgba(108, 92, 231, 0.1);
        }

        .tabs button.active {
          background: #6C5CE7;
          color: white;
          border-color: #6C5CE7;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        .cards-wrapper {
          display: grid;
          grid-template-columns: repeat(2, 392px);
          justify-content: center;
          gap: 24px;
          padding: 0 2rem;
          margin-top: 2rem;
        }

        .cards-wrapper.horizontal-scroll {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          gap: 2.5rem;
          padding: 0 3rem;
        }

        .cards-wrapper.horizontal-scroll .card {
          flex: 0 0 calc(80% - 2.5rem);
          scroll-snap-align: start;
          margin-right: 2.5rem;
        }

        .cards-wrapper.horizontal-scroll::-webkit-scrollbar {
          display: none;
        }

        .card {
          display: flex;
          width: 392px;
          height: 292px;
          padding: 20px;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 16px;
          flex-shrink: 0;
          border-radius: 20px;
          background: linear-gradient(131deg, rgba(206, 190, 255, 0.70) -12.28%, rgba(242, 230, 255, 0.70) 113.85%);
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s, background 0.4s;
          cursor: pointer;
          text-align: left;
          position: relative;
        }

        .card:hover {
          transform: translateY(-8px) scale(1.04);
          box-shadow: 0 8px 32px rgba(108, 92, 231, 0.18), 0 2px 8px rgba(0,0,0,0.08);
          background: linear-gradient(131deg, #e0d4ff 0%, #c1b6f7 100%);
          z-index: 2;
        }

        .card h3 {
          margin: 0;
          padding: 0;
          font-size: 1.2rem;
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .card p {
          font-size: 0.95rem;
          color: #444;
          margin: 0;
          padding: 0;
        }

        .icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          color: #6C5CE7;
        }

        @media (max-width: 1024px) {
          .cards-wrapper {
            display: flex !important;
            flex-direction: column;
            gap: 1.5rem;
            padding: 0 1rem;
            grid-template-columns: none !important;
          }

          .card {
            width: 100% !important;
            max-width: 100%;
            min-width: 0;
            margin: 0 auto;
            box-sizing: border-box;
            height: auto !important;
            padding: 1.5rem;
          }
        }

        @media (max-width: 992px) {
          .tabs {
            flex-wrap: wrap;
            overflow-x: visible;
          }
        }

        @media (max-width: 768px) {
          .cards-wrapper {
            padding: 0 0.5rem;
          }

          .tabs button {
            min-width: 140px;
            padding: 0.6rem 1rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default MentalHealthServices;
