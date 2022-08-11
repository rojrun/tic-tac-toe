import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../components/App';
import StartGame from '../components/StartGame';
import Players from '../components/Players';

describe("On load, render div with tic tac toe and how many players", () => {
  test("renders with h1 title", () => {
    render(<App />);
    const title = screen.getByText(/TIC TAC TOE/);
    expect(title).toBeInTheDocument();
  });
});

describe("Render One or Two player buttons", () => {
  test("Start game component renderings", () => {
    const setVisible = jest.fn();
    const setPlayerX = jest.fn();
    const setPlayerO = jest.fn();
    const setCurrentPlayer = jest.fn();

    render(
      <StartGame 
        setVisible={setVisible} 
        setPlayerX={setPlayerX} 
        setPlayerO={setPlayerO}
        setCurrentPlayer={setCurrentPlayer}
      />
    );

    const onePlayerBttn = screen.getByTestId("onePlayer");
    fireEvent.click(onePlayerBttn);
    const playerSelection = screen.getByText("Player, select X or O.");
    expect(playerSelection).toBeInTheDocument();
    
    const xBttn = screen.getByTestId("x");
    fireEvent.click(xBttn);
    const view = render(<Players  playerX="Player X" playerO="Computer O" currentPlayer="Player X" xWins={0} oWins={0} totalGameCount={1} />);
    // const playerXCard = view.container.querySelector("#player_x");
    expect(view).toBeInTheDocument();
    // const playerOCard = screen.getByText("Player 0");
    // expect(playerOCard).toBeInTheDocument();


    // const twoPlayersBttn = screen.getByTestId("twoPlayers");
    
  });
})  

