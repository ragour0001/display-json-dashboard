import React from 'react';
import styled from 'styled-components';

interface InsightProps {
  percentage: number;
  description: string;
  glowColor: string;
}

const InsightsSectionContainer = styled.section`
  padding: 100px 24px;
  background-color: #ffffff;
`;

const InsightsTitle = styled.h2`
  text-align: center;
  font-size: 42px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 20px;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
`;

const Highlight = styled.span`
  color: #6C5CE7;
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`;

const InsightCard = styled.div<{ glowColor: string }>`
  text-align: center;
  padding: 32px 24px;
  border-radius: 16px;
  position: relative;
  transition: transform 0.3s ease;
  background-color: #fff;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Percentage = styled.div<{ glowColor: string }>`
  font-size: 52px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
  min-width: 120px;
  display: inline-block;
  font-variant-numeric: tabular-nums;
  font-family: 'Inter', sans-serif;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: ${props => props.glowColor};
    filter: blur(20px);
    opacity: 0.85;
    z-index: -1;
    border-radius: 50%;
    mix-blend-mode: multiply;
  }
`;

const Description = styled.p`
  font-size: 19px;
  font-weight: 550;
  line-height: 1.6;
  color: #1a1a1a;
  margin: 0;
  position: relative;
  z-index: 1;
  padding-top: 12px;
`;

const insights: InsightProps[] = [
  {
    percentage: 15,
    description: 'Increase in Productivity',
    glowColor: '#FFD700'
  },
  {
    percentage: 34,
    description: 'Reduction in Absenteeism in Employees',
    glowColor: '#7DDDE1'
  },
  {
    percentage: 96,
    description: 'People Claim Being in a Good Mood with Care',
    glowColor: '#68D585'
  },
  {
    percentage: 22,
    description: "Reduction in organizations' Employee Turnover",
    glowColor: '#D0BCFF'
  }
];

const InsightsSection: React.FC = () => {
  return (
    <InsightsSectionContainer>
      <InsightsTitle>
        Insights from Our <Highlight>Research</Highlight>
      </InsightsTitle>
      <InsightsGrid>
        {insights.map((insight, index) => (
          <InsightCard key={index} glowColor={insight.glowColor}>
            <Percentage glowColor={insight.glowColor}>
              {insight.percentage}%
            </Percentage>
            <Description>{insight.description}</Description>
          </InsightCard>
        ))}
      </InsightsGrid>
    </InsightsSectionContainer>
  );
};

export default InsightsSection; 