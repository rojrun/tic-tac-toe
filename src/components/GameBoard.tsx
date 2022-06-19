import React, {useState, useEffect, useRef} from 'react';
import {Box, Paper, Stack} from '@mui/material';

interface GameBoardProps {
  currentPlayer: string;
  setCurrentPlayer: Function;
  xWins: number;
  setXWins: Function;
  oWins: number;
  setOWins: Function;
  totalGameCount: number;
  setTotalGameCount: Function;
}

const GameBoard = ({currentPlayer, setCurrentPlayer, xWins, setXWins, oWins, setOWins, totalGameCount, setTotalGameCount}: GameBoardProps) => {

  const initialArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [gameBoard, setGameBoard] = useState<string[][]>(initialArray);
  const refs = useRef<HTMLDivElement | null>(null);

  const handleMarkBox = (row: number, column: number) => {
    const newGameBoard = [...gameBoard];
    if (newGameBoard[row][column] === "") {
      newGameBoard[row].splice(column, 1, currentPlayer);
      setGameBoard(newGameBoard);
      checkForWinner();
    } else {
      console.log("pick another selection");
    }
  }

  const checkForWinner = () => {
    if ( 
      // Horizontal lines
      (gameBoard[0][0] === currentPlayer) && (gameBoard[0][1] === currentPlayer) && (gameBoard[0][2] === currentPlayer) ||
      (gameBoard[1][0] === currentPlayer) && (gameBoard[1][1] === currentPlayer) && (gameBoard[1][2] === currentPlayer) ||
      (gameBoard[2][0] === currentPlayer) && (gameBoard[2][1] === currentPlayer) && (gameBoard[2][2] === currentPlayer) ||
      // Vertical lines
      (gameBoard[0][0] === currentPlayer) && (gameBoard[1][0] === currentPlayer) && (gameBoard[2][0] === currentPlayer) ||
      (gameBoard[0][1] === currentPlayer) && (gameBoard[1][1] === currentPlayer) && (gameBoard[2][1] === currentPlayer) ||
      (gameBoard[0][2] === currentPlayer) && (gameBoard[1][2] === currentPlayer) && (gameBoard[2][2] === currentPlayer) ||
      // Diagonal lines
      (gameBoard[0][0] === currentPlayer) && (gameBoard[1][1] === currentPlayer) && (gameBoard[2][2] === currentPlayer) ||
      (gameBoard[2][0] === currentPlayer) && (gameBoard[1][1] === currentPlayer) && (gameBoard[0][2] === currentPlayer) 
    ) {
      if (currentPlayer === "X") {
        setXWins(++xWins);
      } else {
        setOWins(++oWins);
      }
    } else {
      // Switch currentPlayer
      if (currentPlayer === "X") {
        setCurrentPlayer("O");
      } else {
        setCurrentPlayer("X");
      }
    }
  }

  return (
    <Paper variant="outlined" ref={refs}>
      { gameBoard.map((array, rowIndex) => {
          return (
            <Stack 
              direction="row" 
              justifyContent="center" 
              alignItems="center" 
              spacing={4} 
              key={rowIndex} 
              sx={{borderBottom: 2}}
            >
              { array.map((string, colIndex) => {
                  return (
                    <Box 
                      component="div"
                      sx={{p: 2}}
                      key={colIndex}
                      onClick={() => handleMarkBox(rowIndex, colIndex)}
                    >
                      { !string ? <span>&nbsp;&nbsp;</span> : string }
                    </Box>
                  );
                })
              }
            </Stack>
          );
        })
      }
    </Paper>
  );
}

export default GameBoard;
