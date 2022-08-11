import React from 'react';
import {PlayAgainResetButtonsProps} from '../types';
import {Paper, ButtonGroup, Button} from '@mui/material';

const PlayAgainResetButtons = (
  {
    showPlayAgainBttn,
    setShowPlayAgainBttn,
    totalGameCount,
    setTotalGameCount,
    setVisible,
    setCurrentPlayer,
    playerX,
    setPlayerX,
    setPlayerO,
    setXWins,
    setOWins,
    setGameBoard,
    setShowWinner,
    setRemoveClick,
    setWinArray,
    setTiedGame
  }: PlayAgainResetButtonsProps) => {

  const handlePlayAgain = () => {
    setTotalGameCount(++totalGameCount);
    setCurrentPlayer(playerX);
    setShowPlayAgainBttn(false);
    setShowWinner(false);
    setRemoveClick(false);
    setTiedGame(false);
    setWinArray([]);
    clearBoard();
  }

  const handleResetGame = () => {
    setShowPlayAgainBttn(false);
    setTotalGameCount(1);
    setVisible(true);
    setCurrentPlayer("");
    setPlayerX("");
    setPlayerO("");
    setXWins(0);
    setOWins(0);
    setShowWinner(false);
    setRemoveClick(false);
    setTiedGame(false);
    setWinArray([]);
    clearBoard();
  }

  const clearBoard = () => {
    // Create an array of empty strings
    const initialArray: string[] = [];
    for (let i = 0; i < 9; i++) {
      initialArray.push("");
    }
    setGameBoard(initialArray);
  }

  return (
    <Paper elevation={10} id="buttons_group" sx={{my: 2, py:2, textAlign: "center"}}>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
          { showPlayAgainBttn &&
            <Button onClick={handlePlayAgain}>Play again</Button> 
          }
          <Button onClick={handleResetGame}>Reset game</Button>
        </ButtonGroup>
    </Paper>
  );
}

export default PlayAgainResetButtons;
