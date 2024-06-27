import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

test('renders HeroImage', () => {
  render(<HeroImage src="https://via.placeholder.com/800x400" alt="Hero Image" title="Hero Title" />);
  const imgElement = screen.getByAltText(/Hero Image/i);
  const titleElement = screen.getByText(/Hero Title/i);
  expect(imgElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
});
