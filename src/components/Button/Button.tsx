import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
  disabled?: boolean;
  label: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
  border: 2px solid palevioletred;
  padding: 10px 20px;
  font-size: 16px;
  margin: 5px;
`;

const Button: React.FC<ButtonProps> = ({ primary, disabled, label, onClick }) => {
  return (
    <StyledButton primary={primary} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
