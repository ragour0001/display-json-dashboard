import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';
import styled from 'styled-components';

interface Feature {
  title: string;
  description: string;
}

const TherapyHubSection = styled.section`
  min-height: 100vh;
  background-color: #EAE5FF;
  padding: 80px 24px;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    padding: 60px 16px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding: 0 24px;

  @media (max-width: 576px) {
    padding: 0 16px;
  }
`;

const MainTitle = styled.h1`
  font-family: "Quicksand", sans-serif;
  font-size: 42px;
  font-weight: 700;
  color: #333;
  margin-bottom: 32px;
  line-height: 1.2;
  letter-spacing: 0.5px;

  @media (max-width: 992px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 32px;
  }
`;

const Highlight = styled.span`
  color: #6C5CE7;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: #444;
  margin-bottom: 8px;
  font-weight: 500;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.5px;

  @media (max-width: 992px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 800px;
  margin: 0 auto 64px;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 16px;
    margin-bottom: 48px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 500px));
  gap: 48px;
  margin-bottom: 64px;
  justify-content: center;

  @media (max-width: 992px) {
    grid-template-columns: minmax(0, 500px);
    gap: 32px;
  }
`;

const FeatureItem = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: rgba(234, 229, 255, 0.5);
  padding: 32px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(108, 92, 231, 0.15);
    background-color: rgba(234, 229, 255, 0.8);
  }

  @media (max-width: 576px) {
    padding: 24px;
  }
`;

const Icon = styled.div`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  border-radius: 12px;
  opacity: 0.9;

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.5px;
`;

const FeatureDescription = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

const CTASection = styled.div`
  padding: 48px;
  border-radius: 16px;

  @media (max-width: 576px) {
    padding: 32px 24px;
  }
`;

const CTATitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.5px;
`;

const CTADescription = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
`;

const CTAButton = styled.button`
  background-color: #6c5ce7;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5649c0;
  }
`;

const TherapyHub: React.FC = () => {
  const { trackSectionView, trackFeatureClick } = useGoogleAnalytics();

  const features: Feature[] = [
    {
      title: 'Assessment for Personalized Therapy Plans',
      description: 'Quickly identify your mental health needs and goals in just 3-5 minutes.'
    },
    {
      title: 'Customized Care Plan',
      description: 'Access licensed counselors, therapists, and coaches via text, audio, or video for tailored support.'
    },
    {
      title: 'Integrated Coaching Services',
      description: 'Work with 24/7 mental health support coaches to develop strategies for stress, work-life balance, career, and wellness.'
    },
    {
      title: 'Continuous Progress Monitoring',
      description: 'Track your progress with stress and anxiety relief through regular check-ins and visual updates.'
    }
  ];

  const iconUrls = [
    'https://cdn.builder.io/api/v1/image/assets/TEMP/a7fa666e0925194e9115e48122aefc55a1fac24e?placeholderIfAbsent=true&apiKey=f0e0092ac7e448b2898debffec687ad5',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/e1d350ddd9994c1ef6c46fd90b1fb9a3fb89d637?placeholderIfAbsent=true&apiKey=f0e0092ac7e448b2898debffec687ad5',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/f59d17fc75dadd4b0551c7f1d9005c281651a536?placeholderIfAbsent=true&apiKey=83eab7ed5f664b50b10fdfea256f3ff7',
    'https://cdn.builder.io/api/v1/image/assets/TEMP/791bff67dd450b8a569228a2876ff55d0f7ae984?placeholderIfAbsent=true&apiKey=83eab7ed5f664b50b10fdfea256f3ff7'
  ];

  const iconAlts = [
    'Assessment icon',
    'Care plan icon',
    'Coaching service icon',
    'Progress monitoring icon'
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
    trackSectionView('therapy_hub');
  }, [trackSectionView]);

  const onFeatureClick = (featureTitle: string) => {
    trackFeatureClick(`therapy_hub_${featureTitle.toLowerCase().replace(/\s+/g, '_')}`);
  };

  const onBookTherapist = () => {
    trackFeatureClick('book_therapist_therapy_hub');
  };

  return (
    <TherapyHubSection>
      <ContentContainer>
        <MainTitle data-aos="fade-up">
          Our <Highlight>Therapy Hub</Highlight>
        </MainTitle>
        <Subtitle data-aos="fade-up" data-aos-delay="100">
          Personalized Mental Wellness
        </Subtitle>
        <Description data-aos="fade-up" data-aos-delay="200">
          Start your journey with therapy, coaching, mental health counselor and self-help tools that support you every step of the way.
        </Description>

        <FeaturesGrid>
          {features.map((feature, idx) => (
            <FeatureItem
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={100 * idx}
              onClick={() => onFeatureClick(feature.title)}
            >
              <Icon>
                <img
                  src={iconUrls[idx]}
                  alt={iconAlts[idx]}
                  width="80"
                  height="80"
                />
              </Icon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureItem>
          ))}
        </FeaturesGrid>

        <CTASection data-aos="fade-up" data-aos-delay="400">
          <CTATitle>You Deserve to be Happy</CTATitle>
          <CTADescription>We Will Help You Get Matched with the Right Therapist!</CTADescription>
          <CTAButton onClick={onBookTherapist}>
            Book a Therapist
          </CTAButton>
        </CTASection>
      </ContentContainer>
    </TherapyHubSection>
  );
};

export default TherapyHub; 