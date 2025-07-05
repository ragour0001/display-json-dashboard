import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGoogleAnalytics } from '../../../hooks/useGoogleAnalytics';

// Import Google Fonts for Open Sans
const GoogleFontsLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
);

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Meditation Mastery Suite",
    description: "Explore guided meditations and mindfulness exercises to reduce stress, improve focus, and find inner calm."
  },
  {
    title: "Feel Better in Under 90 Seconds",
    description: "Use quick, science-backed techniques to relieve stress instantly with grounding, tactile stimulation, and breathing exercises."
  },
  {
    title: "Sleep Support Resources",
    description: "Enjoy guided meditations for better sleep with calming soundscapes, bedtime meditations, and personalized tips for waking up refreshed."
  },
  {
    title: "Personalized Daily Check-Ins",
    description: "Track your mood, sleep, and energy with an AI-powered mental wellness app and get insights and tailored recommendations to stay on track."
  },
  {
    title: "Self-Help Pro Toolkit",
    description: "Build resilience, boost productivity, and stay balanced with powerful tools and personalized mental health support plans for life’s challenges."
  }
];

const FeaturesSection = styled.section`
  min-height: 100vh;
  background-color: #ffffff;
  padding: 80px 24px;
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    padding: 40px 16px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 36px;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
  margin-bottom: 32px;
  letter-spacing: 0.5px;

  @media (max-width: 576px) {
    font-size: 22px;
    margin-bottom: 8px;
    display: block;
  }
`;

const SubtitleBlack = styled.span`
  color: #222;
`;

const Highlight = styled.span`
  color: #6C5CE7;
  font-weight: 700;

  @media (max-width: 576px) {
    display: block;
    font-size: 28px;
    margin-top: 4px;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  color: #333;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  max-width: 800px;
  margin: 0 auto 48px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FeaturesContainer = styled.div<{ $isMobile: boolean }>`
  display: flex;
  gap: 48px;
  margin-bottom: 32px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeaturesGrid = styled.div<{ $isMobile: boolean }>`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    ${props => props.$isMobile && `
      display: flex !important;
      flex-direction: row;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      gap: 16px;
      padding-bottom: 16px;
      width: 100%;

      &::-webkit-scrollbar {
        display: none;
      }
    `}
  }
`;

const AppPreview = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1200px) {
    order: -1;
  }
`;

const AppImage = styled.img`
  width: 68%;
  height: 100%;
  border-radius: 60px;
  object-fit: cover;
  box-shadow: rgb(111 94 156) -5px 0px 52px -6px;

  @media (max-width: 768px) {
    width: 42%;
    border-radius: 22px;
  }
`;

const FeatureCard = styled.div<{ $isMobile: boolean }>`
  background: #f0ebff;
  border-radius: 16px;
  transition: transform 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px inset;
  scroll-snap-align: start;
  cursor: pointer;

  ${props => props.$isMobile && `
    min-width: 250px;
    scroll-snap-align: start;
  `}

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureHeader = styled.div`
  font-size: 18px;
  background: #6C5CE7;
  font-weight: 600;
  text-align: center;
  padding: 16px;
  border-radius: 8px 8px 0 0;
  color: white;
  margin-bottom: 12px;

  @media (max-width: 576px) {
    font-size: 15px;
    padding: 12px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  color: #555;
  padding: 16px;
  line-height: 1.5;
  margin: 0;
  margin-top: 8px;
  font-weight: 600;
`;

const DownloadCard = styled.div<{ $isMobile: boolean }>`
  background: #ffffff;
  border-radius: 16px;
  transition: transform 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px inset;
  scroll-snap-align: start;
  cursor: pointer;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${props => props.$isMobile && `
    min-width: 250px;
    scroll-snap-align: start;
  `}

  &:hover {
    transform: translateY(-5px);
  }
`;

const DownloadButton = styled.button`
  background-color: #6C5CE7;
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 16px;
  width: 100%;

  &:hover {
    background-color: #5649c0;
  }
`;

const ContactText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const MobileAppFeaturesComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { trackSectionView, trackFeatureClick, trackDownload } = useGoogleAnalytics();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    trackSectionView('mobile_app_features');

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [trackSectionView]);

  const onFeatureClick = (featureTitle: string) => {
    trackFeatureClick(`app_${featureTitle.toLowerCase().replace(/\s+/g, '_')}`);
  };

  const onDownloadClick = () => {
    trackDownload('mobile_app');
  };

  return (
    <>
      <GoogleFontsLink />
      <FeaturesSection>
        <ContentContainer>
          <Subtitle>
            <SubtitleBlack>What We Offer with </SubtitleBlack>
            <Highlight>Our App</Highlight>
          </Subtitle>
          <Title>Better Mental Health Care on the Go</Title>
          <Description>
            Upgrade your well-being with Refill Health's all-in-one self-care AI mental health app, designed to help you thrive every day.
          </Description>

          <FeaturesContainer $isMobile={isMobile}>
            <FeaturesGrid $isMobile={isMobile}>
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  $isMobile={isMobile}
                  onClick={() => onFeatureClick(feature.title)}
                >
                  <FeatureHeader>{feature.title}</FeatureHeader>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
              
              <DownloadCard $isMobile={isMobile}>
                <DownloadButton onClick={onDownloadClick}>
                  Download App Today
                </DownloadButton>
                <ContactText>
                  For more help contact us now.
                </ContactText>
              </DownloadCard>
            </FeaturesGrid>

            <AppPreview>
              <AppImage 
                src="assets/images/mobile-phone-1.png" 
                alt="Refill Health App Preview" 
              />
            </AppPreview>
          </FeaturesContainer>
        </ContentContainer>
      </FeaturesSection>
    </>
  );
};

export default MobileAppFeaturesComponent;