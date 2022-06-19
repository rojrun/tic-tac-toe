import React, {useState} from 'react';
import {Paper, ButtonGroup, Button} from '@mui/material';

interface StartGameProps {
  setVisible: Function;
  setPlayerX: Function;
  setPlayerO: Function;
  setCurrentPlayer: Function;
}

const StartGame = ({setVisible, setPlayerX, setPlayerO, setCurrentPlayer}: StartGameProps) => {
  const [isPlayerSelected, setIsPlayerSelected] = useState(false);

  const handleOnePlayer = () => {
    setIsPlayerSelected(true);
  }

  const handleTwoPlayers = () => {
    setPlayerX("Player");
    setPlayerO("Player");
    setCurrentPlayer("X");
    setVisible(false);
  }

  const handleSelectX = () => {
    setPlayerX("Player");
    setPlayerO("Computer");
    setCurrentPlayer("X");
    setVisible(false);
  }

  const handleSelectO = () => {
    setPlayerX("Computer");
    setPlayerO("Player");
    setCurrentPlayer("X");
    setVisible(false);
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
      { isPlayerSelected
        ? <Paper variant="outlined">
            <p>Player, select X or O.</p>
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
