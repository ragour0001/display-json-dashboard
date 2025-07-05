import React from 'react';
import styled from 'styled-components';

interface Step {
  number: number;
  title: string;
  description: string;
  position: 'left' | 'right';
}

const HowItWorksContainer = styled.section`
  padding: 51px 24px;
  background-color: #F9F8FF;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-image: url('/assets/images/how-it-works-frame.png');
  background-size: cover;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 42px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin-bottom: 6px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Timeline = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 40px 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: calc(100% - 80px);
  background-color: black;
  top: 40px;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 14px;
    background-color: black;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    left: 24px;
  }
`;

const TimelineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const TimelineCircle = styled.div`
  width: 48px;
  height: 48px;
  background-color: #6c5ce7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: 600;
  z-index: 2;
  flex-shrink: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    left: 0px;
    transform: none;
  }
`;

interface TimelineContentProps {
  position: 'left' | 'right';
}

const TimelineContent = styled.div<TimelineContentProps>`
  width: calc(50% - 40px);
  background: #f0f8ff00;
  padding: 24px;
  position: relative;
  transition: transform 0.3s ease;
  margin-left: ${props => props.position === 'right' ? 'calc(50% + 40px)' : '0'};
  margin-right: ${props => props.position === 'left' ? 'calc(50% + 40px)' : '0'};

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 64px);
    margin-left: 48px;
    margin-right: 0;
  }
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: #6C5CE7;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-weight: 600;
`;

const steps: Step[] = [
  {
    number: 1,
    title: 'Quick Self-Check',
    description: 'Take a 4-5 minute quiz to spot your needs.',
    position: 'right'
  },
  {
    number: 2,
    title: 'AI-Powered Personalized Care Plans',
    description: 'Harnessing AI to deliver a customized care plan exclusively designed for your emotional well-being.',
    position: 'left'
  },
  {
    number: 3,
    title: 'Flexible Support',
    description: 'Chat with a mental health counselor or a coach by text, audio, or video, and track your mood, sleep, and energy in the app.',
    position: 'right'
  },
  {
    number: 4,
    title: 'Ongoing Guidance',
    description: 'A Care Navigator is always available to support you.',
    position: 'left'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <HowItWorksContainer>
      <SectionTitle>How It Works</SectionTitle>
      <SectionSubtitle>
        Improve your mental health in just a few simple steps.
      </SectionSubtitle>

      <Timeline>
        <TimelineLine />
        {steps.map((step, index) => (
          <TimelineItem key={index}>
            <TimelineContent position={step.position}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </TimelineContent>
            <TimelineCircle>{step.number}</TimelineCircle>
          </TimelineItem>
        ))}
      </Timeline>
    </HowItWorksContainer>
  );
};

export default HowItWorks; 