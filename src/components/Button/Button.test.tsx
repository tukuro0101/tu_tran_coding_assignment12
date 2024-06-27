import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders Button', () => {
  render(<Button label="Button" />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeInTheDocument();
});

test('button is disabled', () => {
  render(<Button label="Button" disabled />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).toBeDisabled();
});
