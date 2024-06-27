import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  src: string;
  alt: string;
  title: string;
}

const StyledHeroImage = styled.div`
  position: relative;
  max-width: 100%;
  height: auto;
  border: 2px solid palevioletred;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledTitle = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, title }) => {
  return (
    <StyledHeroImage>
      <StyledImg src={src} alt={alt} />
      <StyledTitle>{title}</StyledTitle>
    </StyledHeroImage>
  );
};

export default HeroImage;
