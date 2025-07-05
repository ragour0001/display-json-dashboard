import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NextButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  className?: string;
}

const NextButton: React.FC<NextButtonProps> = ({
  onClick,
  disabled = false,
  text = 'Next',
  className = ''
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`
        px-6 py-2.5
        bg-blue-600 hover:bg-blue-700
        text-white font-medium
        rounded-lg
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
    >
      {text}
    </button>
  );
};

export default NextButton; 