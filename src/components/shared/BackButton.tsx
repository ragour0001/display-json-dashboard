import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.scss';

interface BackButtonProps {
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  showText = true, 
  size = 'medium',
  onClick 
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1); // Go back in history
    }
  };

  return (
    <button 
      className={`back-button ${size}`} 
      onClick={handleClick}
      aria-label="Go back"
    >
      <svg 
        className="back-icon" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M15 18L9 12L15 6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      {showText && <span className="back-text">Back</span>}
    </button>
  );
};

export default BackButton; 