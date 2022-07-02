import React from 'react';
import {Paper, ButtonGroup, Button} from '@mui/material';

interface PlayAgainResetButtonsProps {
  showPlayAgainBttn: boolean;
  setShowPlayAgainBttn: Function;
  totalGameCount: number; 
  setTotalGameCount: Function;
  setVisible: Function;
  setCurrentPlayer: Function;
  playerX: string;
  setPlayerX: Function;
  setPlayerO: Function;
  setXWins: Function;
  setOWins: Function;
  setGameBoard: Function;
  setShowWinner: Function;
  setRemoveClick: Function;
}

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
    setRemoveClick
  }: PlayAgainResetButtonsProps) => {

  const handlePlayAgain = () => {
    setTotalGameCount(++totalGameCount);
    setCurrentPlayer(playerX);
    setShowPlayAgainBttn(false);
    setShowWinner(false);
    setRemoveClick(false);
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
      <ButtonGroup variant="outlined" aria-label="outlined primary button group">
          { showPlayAgainBttn &&
            <Button onClick={handlePlayAgain}>Play again</Button> 
          }
          <Button onClick={handleResetGame}>Reset game</Button>
        </ButtonGroup>
    </Paper>
  );
}

export default PlayAgainResetButtons;
