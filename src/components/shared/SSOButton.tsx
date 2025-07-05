import React from 'react';
import './SSOButton.scss';

interface SSOButtonProps {
  text?: string;
  onClick?: () => void;
}

const SSOButton: React.FC<SSOButtonProps> = ({ 
  text = 'Continue with SSO',
  onClick 
}) => {
  return (
    <button type="button" className="sso-button" onClick={onClick}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/f0e0092ac7e448b2898debffec687ad5/d1fc68d077ed861c9c248c8148e6ff6522dba58c?placeholderIfAbsent=true"
        alt="SSO"
        className="sso-icon"
      />
      <span>{text}</span>
    </button>
  );
};

export default SSOButton; 