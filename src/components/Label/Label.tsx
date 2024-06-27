import React from 'react';
import styled from 'styled-components';

interface LabelProps {
  text: string;
}

const StyledLabel = styled.label`
  font-size: 16px;
  color: palevioletred;
`;

const Label: React.FC<LabelProps> = ({ text }) => {
  return <StyledLabel>{text}</StyledLabel>;
};

export default Label;
