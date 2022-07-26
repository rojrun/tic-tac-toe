import React, {useState} from 'react';
import {StartGameProps} from '../types';
import {Paper, ButtonGroup, Button} from '@mui/material';

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
      <Paper elevation={10} id="start_game" sx={{my: 2, py: 2, textAlign: "center"}}>
        <p>Welcome, is this a One or Two player game?</p>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={handleOnePlayer}>One player</Button>
          <Button onClick={handleTwoPlayers}>Two players</Button>
        </ButtonGroup>
      </Paper>
      { isPlayerSelected
        ? <Paper elevation={10} id="player_select" sx={{my: 2, py: 2, textAlign: "center"}}>
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
