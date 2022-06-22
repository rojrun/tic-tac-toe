import React, {useState, useEffect, useRef} from 'react';
import PlayAgainResetButtons from './PlayAgainResetButtons';
import {Box, Paper, Stack} from '@mui/material';

interface GameBoardProps {
  currentPlayer: string;
  setCurrentPlayer: Function;
  xWins: number;
  setXWins: Function;
  oWins: number;
  setOWins: Function;
  playerX: string;
  setPlayerX: Function;
  playerO: string;
  setPlayerO: Function;
  totalGameCount: number;
  setTotalGameCount: Function;
  setVisible: Function;
  playerCount: number;
  setPlayerCount: Function;
}

const GameBoard = (
  {
    currentPlayer,
    setCurrentPlayer,
    xWins,
    setXWins,
    oWins,
    setOWins,
    playerX,
    setPlayerX,
    playerO,
    setPlayerO,
    totalGameCount,
    setTotalGameCount,
    setVisible,
    playerCount,
    setPlayerCount
  }: GameBoardProps) => {

  const initialArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [gameBoard, setGameBoard] = useState<string[][]>(initialArray);
  const [showPlayAgainBttn, setShowPlayAgainBttn] = useState<boolean>(false);
  const refs = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    console.log("currentPlayer: ", currentPlayer);
    if (playerCount === 1) {
      const newGameBoard: string[][] = [...gameBoard];
      const randomArray = Math.floor(Math.random() * newGameBoard.length);
      const randomIndex = Math.floor(Math.random() * newGameBoard[randomArray].length);
      
      if (newGameBoard[randomArray][randomIndex] === "") {
        newGameBoard[randomArray].splice(randomIndex, 1, currentPlayer);
        setGameBoard(newGameBoard);
        checkForWinner();
      } 
    } 
  });

  const handleMarkBox = (row: number, column: number) => {
    const newGameBoard = [...gameBoard];
    if (newGameBoard[row][column] === "") {
      newGameBoard[row].splice(column, 1, currentPlayer);
      setGameBoard(newGameBoard);
      checkForWinner();
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
        setShowPlayAgainBttn(true);
      } else {
        setOWins(++oWins);
        setShowPlayAgainBttn(true);
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
    <>
      <Paper variant="outlined" ref={refs} sx={{my: 2, p: 4, textAlign: "center"}}>
        { gameBoard.map((array, rowIndex) => {
            return (
              <Stack 
                direction="row" 
                justifyContent="center" 
                alignItems="center"
                key={rowIndex} 
                sx={{borderBottom: 2}}
              >
                { array.map((string, colIndex) => {
                    return (
                      <Box 
                        component="div"
                        key={colIndex}
                      >
                        <Box
                          component="div"
                          sx={{p: 2}}
                          onClick={() => handleMarkBox(rowIndex, colIndex)}
                        >
                          { !string ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span>&nbsp;{string}&nbsp;</span> }
                        </Box>
                      </Box>
                    );
                  })
                }
              </Stack>
            );
          })
        }
      </Paper>
      <PlayAgainResetButtons 
        showPlayAgainBttn={showPlayAgainBttn}
        setShowPlayAgainBttn={setShowPlayAgainBttn}
        totalGameCount={totalGameCount}
        setTotalGameCount={setTotalGameCount}
        setVisible={setVisible}
        setCurrentPlayer={setCurrentPlayer}
        setPlayerX={setPlayerX}
        setPlayerO={setPlayerO}
        setXWins={setXWins}
        setOWins={setOWins}
        initialArray={initialArray}
        setGameBoard={setGameBoard}
        setPlayerCount={setPlayerCount}
      />
    </>
  );
}

export default GameBoard;
