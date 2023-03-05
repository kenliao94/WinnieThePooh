import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

test('renders form with three input boxes', () => {
  render(<App />);
  const whenInput = screen.getByLabelText('When');
  expect(whenInput).toBeInTheDocument();
  const ifInput = screen.getByLabelText('If');
  expect(ifInput).toBeInTheDocument();
  const actionInput = screen.getByLabelText('Action');
  expect(actionInput).toBeInTheDocument();
});
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);