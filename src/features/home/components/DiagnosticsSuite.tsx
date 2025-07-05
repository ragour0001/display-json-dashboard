import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface DiagnosticTool {
  icon: string;
  title: string;
  description: string;
  position: { top?: string; left?: string; right?: string; };
}

const DiagnosticsSectionContainer = styled.section`
  min-height: 130vh;
  background: var(--Primary-Purple, #6C5CE7);
  padding: 60px 0;
  color: white;
  position: relative;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 0;
  right: 0;
`;

const MainTitle = styled.h3`
  color: #FFF;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 54px;
  margin-bottom: 80px;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 991px) {
    font-size: 42px;
    line-height: 48px;
    margin-bottom: 60px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  height: 800px;
  padding: 0 24px;

  @media (max-width: 1200px) {
    transform: scale(0.9);
    height: 720px;
  }

  @media (max-width: 991px) {
    transform: scale(0.8);
    height: 640px;
  }

  @media (max-width: 850px) {
    transform: scale(0.7);
    height: 560px;
  }

  @media (max-width: 768px) {
    transform: none;
    height: auto;
  }
`;

const BrandSection = styled.div`
  position: absolute;
  left: 0;
  top: 57%;
  transform: translateY(-50%);
  z-index: 10;

  @media (max-width: 768px) {
    position: relative;
    text-align: left;
    left: 0;
    top: 0;
    transform: none;
    margin-bottom: 32px;
  }
`;

const Brand = styled.h2`
  color: #FFF;
  font-family: "Quicksand", "Poppins", "Roboto", "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 100;
  line-height: 26px;
  font-size: 48px;
  letter-spacing: 2px;
  opacity: 0.7;
`;

const Product = styled.h3`
  font-size: 64px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1;
  letter-spacing: 1px;
  color: #FFF;
  opacity: 1;
  margin: 23px 0 0 0;
`;

const StateLayer = styled.button`
  width: 100%;
  max-width: 360px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 12px 64px;
  box-sizing: border-box;
  text-align: center;
  font-size: 22px;
  color: #6c5ce7;
  font-family: Roboto;
  background-color: white;
  border-radius: 100px;
  margin-top: 24px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 2px solid transparent;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(108, 92, 231, 0.25);
    border-color: rgba(108, 92, 231, 0.3);
    background-color: rgba(255, 255, 255, 0.98);
    text-decoration: none;
    color: #6c5ce7;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(108, 92, 231, 0.2),
      transparent
    );
    transition: 0.7s;
    pointer-events: none;
  }

  &:hover::after {
    left: 100%;
  }

  &:active {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(108, 92, 231, 0.2);
    transition: all 0.2s ease;
  }
`;

const LabelText = styled.div`
  position: relative;
  letter-spacing: 1px;
  line-height: 20px;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  display: inline-block;

  ${StateLayer}:hover & {
    transform: scale(1.08);
    letter-spacing: 1.5px;
  }
`;

const ToolsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const ToolItem = styled.div<{ position: { top?: string; left?: string; right?: string; } }>`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 12px;
  border-radius: 16px;
  background: transparent;
  cursor: pointer;
  width: clamp(280px, 30vw, 400px);
  transform-origin: center center;
  transform: scale(1) translate(0, 0);
  top: ${props => props.position.top};
  left: ${props => props.position.left};
  right: ${props => props.position.right};

  &:hover {
    transform: translateY(-8px) scale(1.02);
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 1200px) {
    width: clamp(260px, 28vw, 360px);
  }

  @media (max-width: 991px) {
    width: clamp(240px, 26vw, 320px);
  }

  @media (max-width: 850px) {
    width: clamp(220px, 24vw, 280px);
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    transform: none;
    background: transparent;
    padding: 16px;
    margin-bottom: 16px;

    &:hover {
      transform: translateY(-8px) scale(1.02);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    }
  }
`;

const ToolIcon = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    margin-right: 16px;
  }
`;

const IconCircle = styled.div`
  width: 96px;
  height: 96px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  ${ToolItem}:hover & {
    transform: scale(1.08);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 88px;
    height: 88px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    ${ToolItem}:hover & {
      transform: scale(1.05);
    }
  }
`;

const ToolContent = styled.div`
  flex: 1;
  opacity: 0.9;
  transform: translateX(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: auto;
  padding: 8px 12px;

  @media (max-width: 768px) {
    padding: 0;
    text-align: left;
  }
`;

const ToolTitle = styled.h4`
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 8px;
  padding: 0;
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.5px;
  line-height: 1.3;

  ${ToolItem}:hover & {
    transform: translateY(-2px);
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 0 0 8px;
  }
`;

const ToolDescription = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  opacity: 0.9;
  line-height: 1.4;
  transform: translateY(0);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  color: rgba(255, 255, 255, 0.9);

  ${ToolItem}:hover & {
    transform: translateY(-2px);
    opacity: 1;
  }
`;

const diagnosticTools: DiagnosticTool[] = [
  {
    icon: 'assets/images/diagnostics-suite/cultura.svg',
    title: 'CulturaScope',
    description: 'Organizational Culture & Psychosocial Climate Audit',
    position: { top: '-3%', left: '7%' }
  },
  {
    icon: 'assets/images/diagnostics-suite/behav.svg',
    title: 'BehavSight',
    description: 'Team Dynamics & Behavioral Risk Mapping',
    position: { top: '12%', left: '25%' }
  },
  {
    icon: 'assets/images/diagnostics-suite/thrive.svg',
    title: 'ThriveSense Audit',
    description: 'Psychological Safety & Emotional Climate Diagnostic',
    position: { top: '29%', left: '43%' }
  },
  {
    icon: 'assets/images/diagnostics-suite/humanedge.svg',
    title: 'HumanEdge Audit',
    description: 'Workforce Personality, Role-Fit & Leadership Potential Mapping',
    position: { top: '47%', left: '59%' }
  },
  {
    icon: 'assets/images/diagnostics-suite/deeproot.svg',
    title: 'DeepRoot Audit',
    description: 'Root Cause Diagnostics of Organizational Dysfunction',
    position: { top: '69%', left: '43%' }
  },
  {
    icon: 'assets/images/diagnostics-suite/trustframe.svg',
    title: 'TrustFrame Audit',
    description: 'Trust, Transparency & Feedback Culture Mapping',
    position: { top: '88%', left: '25%' }
  },
  {
    icon: 'assets/images/diagnostics-suite/alignaudit.svg',
    title: 'AlignAudit',
    description: 'Culture, Behavior & Experience Alignment Scan',
    position: { top: '105%', left: '7%' }
  }
];

const DiagnosticsSuite: React.FC = () => {
  const navigate = useNavigate();

  const handleKnowMoreClick = () => {
    navigate('/diagnostics-suite');
  };

  return (
    <DiagnosticsSectionContainer>
      <MainTitle>Advanced Organizational Diagnostics <br/> Suite</MainTitle>
      
      <ContentContainer>
        <BrandSection>
          <Brand>Refill Health</Brand>
          <Product>InsightX™</Product>
          <StateLayer onClick={handleKnowMoreClick}>
            <LabelText>Know More</LabelText>
          </StateLayer>
        </BrandSection>

        <ToolsContainer>
          {diagnosticTools.map((tool, index) => (
            <ToolItem key={index} position={tool.position}>
              <ToolIcon>
                <IconCircle>
                  <img src={tool.icon} alt={`${tool.title} icon`} />
                </IconCircle>
              </ToolIcon>
              <ToolContent>
                <ToolTitle>{tool.title}</ToolTitle>
                <ToolDescription>{tool.description}</ToolDescription>
              </ToolContent>
            </ToolItem>
          ))}
        </ToolsContainer>
      </ContentContainer>
    </DiagnosticsSectionContainer>
  );
};

export default DiagnosticsSuite;