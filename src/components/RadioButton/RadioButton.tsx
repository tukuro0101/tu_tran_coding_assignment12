import React from 'react';
import styled from 'styled-components';

interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (value: string) => void;
}

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: palevioletred;
`;

const StyledInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <StyledLabel>
      <StyledInput
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
      />
      {label}
    </StyledLabel>
  );
};

export default RadioButton;
