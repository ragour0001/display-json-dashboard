import React from 'react';
import './Divider.scss';

interface DividerProps {
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ text = 'Or' }) => {
  return (
    <div className="divider">
      <span className="divider-line"></span>
      <span className="divider-text">{text}</span>
      <span className="divider-line"></span>
    </div>
  );
};

export default Divider; 