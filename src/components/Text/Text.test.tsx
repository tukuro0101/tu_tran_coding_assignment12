import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

test('renders Text', () => {
  render(<Text content="This is some text content" />);
  const textElement = screen.getByText(/This is some text content/i);
  expect(textElement).toBeInTheDocument();
});
