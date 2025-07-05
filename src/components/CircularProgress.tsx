import React from 'react';
import styled from 'styled-components';

interface CircularProgressProps {
  percentage: number;
  progressColor?: string;
}

const ProgressContainer = styled.div`
  width: 237px;
  height: 238px;
  position: relative;

  @media (max-width: 640px) {
    width: 200px;
    height: 200px;
  }
`;

const CircularProgress: React.FC<CircularProgressProps> = ({ 
  percentage = 0, 
  progressColor = '#8474C7' 
}) => {
  const outerRingSvg = (
    <svg width="236" height="237" viewBox="0 0 236 237" fill="none" xmlns="http://www.w3.org/2000/svg" 
      className="outer-ring" style={{ width: '236px', height: '236px', position: 'absolute', left: 0, top: 0 }}>
      <mask id="path-1-inside-1" fill="white">
        <path d="M235.867 118.622C235.867 183.754 183.066 236.555 117.934 236.555C52.8007 236.555 0 183.754 0 118.622C0 53.4887 52.8007 0.687988 117.934 0.687988C183.066 0.687988 235.867 53.4887 235.867 118.622ZM6.07762 118.622C6.07762 180.398 56.1572 230.478 117.934 230.478C179.71 230.478 229.79 180.398 229.79 118.622C229.79 56.8452 179.71 6.76561 117.934 6.76561C56.1572 6.76561 6.07762 56.8452 6.07762 118.622Z"></path>
      </mask>
      <path d="M235.867 118.622C235.867 183.754 183.066 236.555 117.934 236.555C52.8007 236.555 0 183.754 0 118.622C0 53.4887 52.8007 0.687988 117.934 0.687988C183.066 0.687988 235.867 53.4887 235.867 118.622ZM6.07762 118.622C6.07762 180.398 56.1572 230.478 117.934 230.478C179.71 230.478 229.79 180.398 229.79 118.622C229.79 56.8452 179.71 6.76561 117.934 6.76561C56.1572 6.76561 6.07762 56.8452 6.07762 118.622Z" 
        stroke="#C1B5B5" strokeWidth="8" strokeLinejoin="round" mask="url(#path-1-inside-1)"></path>
    </svg>
  );

  const progressSvg = (
    <svg width="236" height="238" viewBox="0 0 236 238" fill="none" xmlns="http://www.w3.org/2000/svg" 
      className="progress-status" style={{ width: '236px', height: '236px', position: 'absolute', left: 1, top: 2 }}>
      <path d="M132.854 2.70898C149.425 5.04439 165.3 10.9397 179.383 19.9971L180.74 20.8838C195.988 30.994 208.627 44.5693 217.624 60.5C226.339 75.9329 231.396 93.152 232.416 110.831L232.502 112.544C233.219 129.287 230.298 145.968 223.961 161.442L223.337 162.937C223.146 163.385 222.623 163.63 222.118 163.458L222.017 163.418C221.54 163.2 221.276 162.633 221.448 162.085L221.488 161.976C227.886 146.895 230.957 130.605 230.483 114.219L230.426 112.633C229.681 95.2426 224.958 78.2624 216.632 62.9941L215.815 61.5215C207.256 46.3651 195.34 33.3794 180.989 23.5557L179.592 22.6152C165.919 13.5489 150.462 7.55507 134.29 5.02246L132.722 4.78809C132.138 4.70484 131.748 4.21372 131.754 3.69434L131.759 3.58984C131.822 3.0425 132.278 2.68304 132.758 2.7002L132.854 2.70898Z" 
        stroke={progressColor} strokeWidth="4" strokeLinejoin="round"></path>
      <circle cx="223.735" cy="163.154" r="5.66081" fill={progressColor}></circle>
      <text fill={progressColor} xmlSpace="preserve" style={{ whiteSpace: 'pre' }} fontFamily="Heebo" fontSize="40" 
        letterSpacing="0em"><tspan x="80.3516" y="131.125">{percentage}%</tspan></text>
    </svg>
  );

  return (
    <ProgressContainer>
      {outerRingSvg}
      {progressSvg}
    </ProgressContainer>
  );
};

export default CircularProgress; 