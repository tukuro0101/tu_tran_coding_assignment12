import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

test('renders Label', () => {
  render(<Label text="Label Text" />);
  const labelElement = screen.getByText(/Label Text/i);
  expect(labelElement).toBeInTheDocument();
});
