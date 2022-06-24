import React, {useState, useEffect, useRef} from 'react';
import PlayAgainResetButtons from './PlayAgainResetButtons';
import {Box, Paper, Grid, Stack} from '@mui/material';

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
  }: GameBoardProps) => {

  const initialArray = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const [gameBoard, setGameBoard] = useState<string[][]>(initialArray);
  const [showPlayAgainBttn, setShowPlayAgainBttn] = useState<boolean>(false);
  const refs = useRef<HTMLDivElement | null>(null);
  const letter = (currentPlayer.split(" "))[1];

  useEffect(() => {
    console.log("currentPlayer: ", currentPlayer);
    if ( (currentPlayer !== "") && (currentPlayer.includes("Computer")) ) {
      const newGameBoard: string[][] = [...gameBoard];
      const randomArray = Math.floor(Math.random() * newGameBoard.length);
      const randomIndex = Math.floor(Math.random() * newGameBoard[randomArray].length);
      
      setTimeout(() => {
        if (newGameBoard[randomArray][randomIndex] === "") {
          newGameBoard[randomArray].splice(randomIndex, 1, letter);
          setGameBoard(newGameBoard);
          checkForWinner();
        }
      }, 3000);
    } 
  }, [currentPlayer]);

  const handleMarkBox = (row: number, column: number) => {
    const newGameBoard = [...gameBoard];
    if (newGameBoard[row][column] === "") {
      newGameBoard[row].splice(column, 1, letter);
      setGameBoard(newGameBoard);
      checkForWinner();
    }
  }

  const checkForWinner = () => {
    if ( 
      // Horizontal lines
      (gameBoard[0][0] === letter) && (gameBoard[0][1] === letter) && (gameBoard[0][2] === letter) ||
      (gameBoard[1][0] === letter) && (gameBoard[1][1] === letter) && (gameBoard[1][2] === letter) ||
      (gameBoard[2][0] === letter) && (gameBoard[2][1] === letter) && (gameBoard[2][2] === letter) ||
      // Vertical lines
      (gameBoard[0][0] === letter) && (gameBoard[1][0] === letter) && (gameBoard[2][0] === letter) ||
      (gameBoard[0][1] === letter) && (gameBoard[1][1] === letter) && (gameBoard[2][1] === letter) ||
      (gameBoard[0][2] === letter) && (gameBoard[1][2] === letter) && (gameBoard[2][2] === letter) ||
      // Diagonal lines
      (gameBoard[0][0] === letter) && (gameBoard[1][1] === letter) && (gameBoard[2][2] === letter) ||
      (gameBoard[2][0] === letter) && (gameBoard[1][1] === letter) && (gameBoard[0][2] === letter)
    ) {
      if (currentPlayer.includes("X")) {
        setXWins(++xWins);
        setShowPlayAgainBttn(true);
      } else {
        setOWins(++oWins);
        setShowPlayAgainBttn(true);
      }
    } else {
      // Switch currentPlayer
      if (currentPlayer.includes("X")) {
        setCurrentPlayer(playerO);
      } else {
        setCurrentPlayer(playerX);
      }
    }
  }

  return (
    <>
      <Paper variant="outlined" ref={refs} sx={{my: 2, p: 4, textAlign: "center"}}>
        <Grid container>
          { gameBoard.map((row, rowIndex) => {
              return (
                <Grid item xs={4} key={rowIndex}>
                  { row.map((column, colIndex) => {
                      return (
                        <Box
                          component="div"
                          key={colIndex}
                          onClick={() => handleMarkBox(rowIndex, colIndex)}
                          sx={{height: 90, border: 2}}
                        >
                          { !column ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span>&nbsp;{column}&nbsp;</span> }
                        </Box>
                      )
                    })
                  }
                </Grid>
              )
            })
          }
        </Grid>
      </Paper>
      <PlayAgainResetButtons 
        showPlayAgainBttn={showPlayAgainBttn}
        setShowPlayAgainBttn={setShowPlayAgainBttn}
        totalGameCount={totalGameCount}
        setTotalGameCount={setTotalGameCount}
        setVisible={setVisible}
        setCurrentPlayer={setCurrentPlayer}
        playerX={playerX}
        setPlayerX={setPlayerX}
        setPlayerO={setPlayerO}
        setXWins={setXWins}
        setOWins={setOWins}
        initialArray={initialArray}
        setGameBoard={setGameBoard}
      />
    </>
  );
}

export default GameBoard;
