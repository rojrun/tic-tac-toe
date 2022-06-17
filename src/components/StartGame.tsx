import React, {useState} from 'react';
import {Paper, ButtonGroup, Button} from '@mui/material';

const StartGame = ({setPlayerCount, setVisible, setPlayerOne, setPlayerTwo, setIsComputer}: any) => {
  const [isPlayerOneSelected, setIsPlayerOneSelected] = useState(false);

  const handleOnePlayer = () => {
    setPlayerCount(1);
    setIsPlayerOneSelected(true);
  }

  const handleTwoPlayers = () => {
    setPlayerCount(2);
    setPlayerOne("X");
    setPlayerTwo("O");
    setVisible(false);
  }

  const handleSelectX = () => {
    setPlayerOne("X");
    setPlayerTwo("O");
    setVisible(false);
    setIsComputer(true);
  }

  const handleSelectO = () => {
    setPlayerOne("O");
    setPlayerTwo("X");
    setVisible(false);
    setIsComputer(true);
  }

  return (
    <>
      <Paper variant="outlined">
        <p>Welcome, is this a One or Two player game?</p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={handleOnePlayer}>One player</Button>
          <Button onClick={handleTwoPlayers}>Two players</Button>
        </ButtonGroup>
      </Paper>
      { isPlayerOneSelected
        ? <Paper variant="outlined">
            <p>Player One, select X or O.</p>
            <p>(X's go first)</p>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={handleSelectX}>X</Button>
              <Button onClick={handleSelectO}>O</Button>
            </ButtonGroup>
          </Paper>
        : null
      }
    </>
  );
}

export default StartGame;
