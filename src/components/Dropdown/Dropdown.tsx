import React from 'react';
import styled from 'styled-components';

interface DropdownProps {
  options: string[];
  onChange: (value: string) => void;
}

const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid palevioletred;
  border-radius: 4px;
  color: palevioletred;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  return (
    <StyledSelect onChange={(e) => onChange(e.target.value)}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
