import React from 'react';
import styled from 'styled-components';

const AboutSectionContainer = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 24px;
  overflow: hidden;
  margin-top: 0;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
`;

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 80px auto 0;
  text-align: center;
  color: white;
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 60px auto 0;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Brand = styled.span`
  color: #6c5ce7;
`;

const BrandSub = styled.span`
  color: #80C1B5;
`;

const Trademark = styled.sup`
  font-size: 32px;
  position: relative;
  top: 1px;
  margin-left: 2px;
  color: #80C1B5;
  display: inline;
  transform: scale(1.2);
  vertical-align: super;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 24px;
    top: 1px;
    transform: scale(1);
  }
`;

const Description = styled.p`
  font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  margin-bottom: 100px;
  color: white;
  letter-spacing: 0.5px;
  word-spacing: 2px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 60px;
    line-height: 2;
    letter-spacing: 0.3px;
  }
`;

const BrandText = styled.span`
  font-weight: 600;
  font-size: 22px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const DiscoverButton = styled.button`
  display: flex;
  width: 253px;
  height: 63px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  background-color: #6C5CE7;
  color: white;
  border: none;
  border-radius: 31.5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    background-color: #5a4bd4;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 56px;
    font-size: 16px;
    border-radius: 28px;
  }
`;

const AboutSection: React.FC = () => {
  return (
    <AboutSectionContainer>
      <ImageContainer>
        <TeamImage 
          src="assets/images/about-background.png" 
          alt="Team working together"
        />
      </ImageContainer>
      <Overlay />
      <ContentContainer>
        <Title>
          About <Brand>Refill </Brand> 
          <span style={{ whiteSpace: 'nowrap' }}>
            <BrandSub>Health</BrandSub>
            <Trademark>™</Trademark>
          </span>
        </Title>
        
        <Description>
          <BrandText>Refill Health</BrandText> is a modern platform built for organizations and 
          individuals. Through science-backed, AI-driven mental wellness tools, we deliver what 
          each person or workplace needs from online therapy and virtual therapy sessions for remote 
          employees to leadership coaching, crisis support, and mental health workshops for organizations.
        </Description>

        <DiscoverButton>
          Discover Yourself
        </DiscoverButton>
      </ContentContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection; 