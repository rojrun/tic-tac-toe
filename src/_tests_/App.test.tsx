import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';
import StartGame from '../components/StartGame';
import {StartGameProps} from '../types';

describe("On load, render div with tic tac toe and how many players", () => {
  test("renders with h1 title", () => {
    render(<App />);
    const title = screen.getByText(/TIC TAC TOE/);
    expect(title).toBeInTheDocument();
  });

  test("Start game component renders", () => {
    render(<StartGame />);
  });
});
