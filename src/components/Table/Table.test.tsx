import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

const headers = ['Header 1', 'Header 2', 'Header 3'];
const data = [
  ['Cell 1', 'Cell 2', 'Cell 3'],
  ['Cell 4', 'Cell 5', 'Cell 6'],
];

test('renders Table', () => {
  render(<Table headers={headers} data={data} />);
  const headerElement = screen.getByText(/Header 1/i);
  expect(headerElement).toBeInTheDocument();
  const cellElement = screen.getByText(/Cell 1/i);
  expect(cellElement).toBeInTheDocument();
});
