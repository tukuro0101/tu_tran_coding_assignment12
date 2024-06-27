import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown from './Dropdown';

const options = ['Option 1', 'Option 2', 'Option 3'];

test('renders Dropdown', () => {
  render(<Dropdown options={options} onChange={() => {}} />);
  const optionElement = screen.getByText(/Option 1/i);
  expect(optionElement).toBeInTheDocument();
});

test('calls onChange when an option is selected', () => {
  const handleChange = jest.fn();
  render(<Dropdown options={options} onChange={handleChange} />);
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Option 2' } });
  expect(handleChange).toHaveBeenCalledWith('Option 2');
});
