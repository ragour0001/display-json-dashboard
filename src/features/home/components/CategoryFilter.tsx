import React from 'react';
import styled, { keyframes } from 'styled-components';

interface CategoryFilterProps {
  category: {
    id: string;
    label: string;
    active: boolean;
  };
  onSelectCategory: (id: string) => void;
}

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 10px 24px;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background: none;
  border: 2px solid rgba(111, 94, 165, 0.7);
  color: #6f5ea5;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(111, 94, 165, 0.1);
  }

  ${props => props.active && `
    background-color: #6f5ea5;
    color: #fff;
    border-color: #6f5ea5;
    animation: ${pulse} 500ms ease-in-out;
  `}
`;

const CategoryFilter: React.FC<CategoryFilterProps> = ({ category, onSelectCategory }) => {
  return (
    <CategoryButton
      active={category.active}
      onClick={() => onSelectCategory(category.id)}
    >
      {category.label}
    </CategoryButton>
  );
};

export default CategoryFilter; 