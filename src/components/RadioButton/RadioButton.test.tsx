import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from './RadioButton';

test('renders RadioButton', () => {
  render(<RadioButton label="Radio Button" name="radioGroup" value="option1" onChange={() => {}} />);
  const labelElement = screen.getByText(/Radio Button/i);
  expect(labelElement).toBeInTheDocument();
});

test('calls onChange when the radio button is selected', () => {
  const handleChange = jest.fn();
  render(<RadioButton label="Radio Button" name="radioGroup" value="option1" onChange={handleChange} />);
  fireEvent.click(screen.getByLabelText(/Radio Button/i));
  expect(handleChange).toHaveBeenCalledWith('option1');
});
