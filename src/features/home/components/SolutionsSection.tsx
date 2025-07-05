import React from 'react';
import styled from 'styled-components';

const SolutionsSectionContainer = styled.section`
  padding: 80px 24px;
  background: #EAE5FF;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const Subtitle = styled.p`
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 48px;
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
`;

const BlackText = styled.span`
  color: #000;
  margin-right: 8px;
`;

const PurpleText = styled.span`
  color: #6c5ce7;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 48px;
  line-height: 1.4;
  letter-spacing: 0.5px;
`;

const SolutionsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5px;
`;

const SolutionCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #D7CFF9;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 32px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  gap: 0.5px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 992px) {
    flex-direction: row;
    min-height: 360px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    gap: 0.5px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

const SolutionImageContainer = styled.div`
  width: 100%;
  height: 240px;
  position: relative;

  @media (min-width: 992px) {
    flex: 1;
    height: auto;
    max-width: 450px;
  }
`;

interface ImageProps {
  float: 'left' | 'right';
}

const SolutionImage = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  padding: 0;
  float: ${props => props.float};

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const SolutionContent = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #D7CFF9;

  @media (min-width: 992px) {
    flex: 1;
    padding: 40px;
    max-width: 450px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const SolutionTitle = styled.h3`
  font-family: "Quicksand", sans-serif;
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 12px 0;
  padding: 0;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SolutionSubtitle = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 15px;
  color: #666;
  margin: 0 0 16px 0;
  padding: 0;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SolutionDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 22px;
  color: #666;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

interface Solution {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageFloat: 'left' | 'right';
}

const solutions: Solution[] = [
  {
    title: 'For Organizations',
    subtitle: 'Empowering Resilient, High-Performing Workplaces',
    description: 'Refill Health partners with organizations to tackle the root causes of stress, disengagement, and turnover through data-driven diagnostics and tailored solutions.',
    image: 'assets/images/our-solutions/for-organizations.png',
    imageAlt: 'Group of diverse people in a meeting',
    imageFloat: 'left'
  },
  {
    title: 'For Individuals',
    subtitle: 'Your Mental Health, Refilled and Reimagined',
    description: 'Refill Health offers personalized, science-backed leveraging AI technology support to help you to manage stress, anxiety, burnout, or simply grow. From therapy and quick self-help tools to mindfulness and self discovery, we\'re your safe space for lasting well-being.',
    image: 'assets/images/our-solutions/for-individual.png',
    imageAlt: 'Person using mental health app',
    imageFloat: 'right'
  },
  {
    title: 'For Care Providers',
    subtitle: 'Empowering Mental Health Professionals',
    description: 'Refill Health offers therapists, counselors, and coaches advanced training, career opportunities, and expert resources to grow their skills, expand their impact, and shape the future of mental health care.',
    image: 'assets/images/our-solutions/care-providers.png',
    imageAlt: 'Mental health professionals in discussion',
    imageFloat: 'left'
  },
  {
    title: 'For Insurers',
    subtitle: 'Improving Health and Reducing Claims',
    description: 'Refill Health partners with insurers to reduce preventable claims and enhance policyholder well-being through mental wellness support and preventive care.',
    image: 'assets/images/our-solutions/for-insures.png',
    imageAlt: 'Insurance professional working',
    imageFloat: 'right'
  }
];

const SolutionsSection: React.FC = () => {
  return (
    <SolutionsSectionContainer>
      <ContentContainer>
        <Subtitle>
          <BlackText>Explore Our</BlackText>
          <PurpleText>Solutions</PurpleText>
        </Subtitle>
        <Title>Choose Your Mental Health Need</Title>

        <SolutionsGrid>
          {solutions.map((solution, index) => (
            <SolutionCard key={index}>
              <SolutionImageContainer>
                <SolutionImage
                  src={solution.image}
                  alt={solution.imageAlt}
                  float={solution.imageFloat}
                />
              </SolutionImageContainer>
              <SolutionContent>
                <SolutionTitle>{solution.title}</SolutionTitle>
                <SolutionSubtitle>{solution.subtitle}</SolutionSubtitle>
                <SolutionDescription>{solution.description}</SolutionDescription>
              </SolutionContent>
            </SolutionCard>
          ))}
        </SolutionsGrid>
      </ContentContainer>
    </SolutionsSectionContainer>
  );
};

export default SolutionsSection; 