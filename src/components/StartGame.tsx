import React, {useState} from 'react';
import {Paper, ButtonGroup, Button} from '@mui/material';

interface StartGameProps {
  setVisible: Function;
  setPlayerX: Function;
  setPlayerO: Function;
  setCurrentPlayer: Function;
}

const StartGame = (
  { 
    setVisible,
    setPlayerX,
    setPlayerO,
    setCurrentPlayer
  }: StartGameProps) => {

  const [isPlayerSelected, setIsPlayerSelected] = useState(false);

  const handleOnePlayer = () => {
    setIsPlayerSelected(true);
  }

  const handleTwoPlayers = () => {
    setPlayerX("Player X");
    setPlayerO("Player O");
    setCurrentPlayer("Player X");
    setVisible(false);
  }

  const handleSelectX = () => {
    setPlayerX("Player X");
    setPlayerO("Computer O");
    setCurrentPlayer("Player X");
    setVisible(false);
  }

  const handleSelectO = () => {
    setPlayerX("Computer X");
    setPlayerO("Player O");
    setCurrentPlayer("Computer X");
    setVisible(false);
  }

  return (
    <>
      <Paper variant="outlined" sx={{my: 2, pb: 2, textAlign: "center"}}>
        <p>Welcome, is this a One or Two player game?</p>
        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          <Button onClick={handleOnePlayer}>One player</Button>
          <Button onClick={handleTwoPlayers}>Two players</Button>
        </ButtonGroup>
      </Paper>
      { isPlayerSelected
        ? <Paper variant="outlined" sx={{my: 2, pb: 2, textAlign: "center"}}>
            <p>Player, select X or O.</p>
            <p>(X's go first)</p>
            <ButtonGroup variant="outlined" aria-label="outlined primary button group">
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
