import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  src: string;
  alt: string;
}

const StyledImg = styled.img`
  max-width: 100%;
  height: auto;
  border: 2px solid palevioletred;
`;

const Img: React.FC<ImgProps> = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} />;
};

export default Img;
