import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders with h1 title', () => {
  render(<App />);
  const title = screen.getByText(/TIC TAC TOE/i);
  expect(title).toBeInTheDocument();
});
