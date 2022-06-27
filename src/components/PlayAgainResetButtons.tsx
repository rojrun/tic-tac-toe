import React, {useEffect} from 'react';
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
  initialArray: string[];
  setGameBoard: Function;
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
    initialArray,
    setGameBoard
  }: PlayAgainResetButtonsProps) => {

  useEffect(() => {
    console.log("initialArray: ", initialArray);
    
  });  
  
  const handlePlayAgain = () => {
    setTotalGameCount(++totalGameCount);
    setCurrentPlayer(playerX);
    setShowPlayAgainBttn(false);
    setGameBoard(initialArray);
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
    setGameBoard(initialArray);
  }

  return (
    <Paper variant="outlined" sx={{my: 2, py:2, textAlign: "center"}}>
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
