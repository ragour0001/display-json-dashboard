import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const HeroBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  z-index: 1;
  transition: object-position 0.3s ease;

  @media (max-width: 640px) {
    object-position: 10% center;
    transform: scale(1.1);
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 2;

  @media (max-width: 640px) {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0 16px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 640px) {
    min-height: 100vh;
    height: auto;
    padding: 0 12px;
    justify-content: center;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 40px;
  border-radius: 24px;
  max-width: 900px;
  width: 100%;
  background-color: rgba(48, 48, 48, 0.25);
  backdrop-filter: blur(8px);
  position: relative;

  /* Desktop & Tablet: Push content well below lady's neck and upper chest */
  @media (min-width: 768px) {
    margin-top: 450px;
  }

  @media (max-width: 991px) {
    padding: 28px;
    gap: 20px;
    max-width: 80%;
  }

  @media (max-width: 640px) {
    padding: 20px;
    margin-top: 360px;
    gap: 16px;
    max-width: 100%;
    margin-bottom: 20px;
    background-color: rgba(48, 48, 48, 0.35);
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const HeroTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  text-transform: capitalize;
  margin: 0;
  max-width: 800px;

  @media (max-width: 991px) {
    font-size: 32px;
    line-height: 44px;
  }

  @media (max-width: 640px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const HeroDescription = styled.p`
  color: rgba(255, 255, 255, 0.90);
  text-align: justify;
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 0px;

  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 28px;
    padding: 0 8px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    padding: 0 8px;
  }
`;

const Subtitle = styled.p`
  color: #fff;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 16px;

  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 12px;
  }
`;

const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 16px 32px;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  ${props => props.variant === 'primary' ? `
    background-color: #6C5CE7;
    color: white;
    border: none;

    &:hover {
      background-color: #5a4bd4;
    }
  ` : `
    background-color: transparent;
    color: white;
    border: 4px solid white;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `}

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`;

const HeroSection: React.FC = () => {
  return (
    <HeroWrapper>
      <HeroBackground
        src="https://d2sx302mdftbx6.cloudfront.net/assets/images/backgroundimage.png"
        alt="Hero background"
      />
      <HeroOverlay />
      <HeroContent>
        <ContentBox>
          <HeroText>
            <HeroTitle>
              Empower Your Workforce With Personalized Mental Health
            </HeroTitle>
            <HeroDescription>
            Building resilient workplaces through proactive, personalized AI mental health support and 
            corporate wellness programs for employee well-being, reducing burnout, and boosting 
            productivity all through tailored, science-backed solutions and the best mental health app 
            for anxiety, depression, and stress.
            </HeroDescription>
            <Subtitle>
              Reframe. Recharge. Rejoice. Your Mental Health, Refilled.
            </Subtitle>
          </HeroText>
          <HeroActions>
            <Button variant="secondary">See How it Works</Button>
            <Button variant="primary">Schedule a Demo</Button>
          </HeroActions>
        </ContentBox>
      </HeroContent>
    </HeroWrapper>
  );
};

export default HeroSection; 