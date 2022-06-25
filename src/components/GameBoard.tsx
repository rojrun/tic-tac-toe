import React, {useState, useEffect, useRef} from 'react';
import PlayAgainResetButtons from './PlayAgainResetButtons';
import {Box, Paper, Grid} from '@mui/material';

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

  const [gameBoard, setGameBoard] = useState<string[] | undefined>();
  const [showPlayAgainBttn, setShowPlayAgainBttn] = useState<boolean>(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const letter = (currentPlayer.split(" "))[1];
  const initialArray: string[] = [];

  useEffect(() => {
    // Create an array of empty strings
    for (let i = 0; i < 9; i++) {
      initialArray.push("");
    }
    setGameBoard(initialArray);
  }, []);

  // useEffect(() => {
  //   if (refs.current !== "null" && refs.current.length > 0) {
  //     console.log("refs: ", refs.current.length);
  //   }
    // if (showPlayAgainBttn) {
    //   refs.current?.map((element) => {
    //     return () => {
    //       element.removeEventListener("click", handleMarkBox);
    //     }
    //   })
    // }
  // }, [showPlayAgainBttn]);

  useEffect(() => {
    console.log("gameBoard: ", gameBoard);
    console.log("refs: ", refs.current);
  }, [gameBoard]);

  // useEffect(() => {
  //   console.log("currentPlayer: ", currentPlayer);
  //   if ( (currentPlayer !== "") && (currentPlayer.includes("Computer")) ) {
  //     const newGameBoard: string[][] = [...gameBoard];
  //     const randomArray = Math.floor(Math.random() * newGameBoard.length);
  //     const randomIndex = Math.floor(Math.random() * newGameBoard[randomArray].length);
      
  //     setTimeout(() => {
  //       if (newGameBoard[randomArray][randomIndex] === "") {
  //         newGameBoard[randomArray].splice(randomIndex, 1, letter);
  //         setGameBoard(newGameBoard);
  //         checkForWinner();
  //       }
  //     }, 3000);
  //   } 
  // }, [currentPlayer]);

  const handleMarkBox = (arrayIndex: number) => {
    const newGameBoard = [...[gameBoard]][0];
    if ( newGameBoard && (newGameBoard.length > 0) ) {
      if (newGameBoard[arrayIndex] === "") {
        newGameBoard.splice(arrayIndex, 1, letter);
        setGameBoard([...newGameBoard]);
        checkForWinner();
      }
    }
  }

  const checkForWinner = () => {
    if ( gameBoard && (
      // Horizontal lines
      (gameBoard[0] === letter) && (gameBoard[1] === letter) && (gameBoard[2] === letter) ||
      (gameBoard[3] === letter) && (gameBoard[4] === letter) && (gameBoard[5] === letter) ||
      (gameBoard[6] === letter) && (gameBoard[7] === letter) && (gameBoard[8] === letter) ||
      // Vertical lines
      (gameBoard[0] === letter) && (gameBoard[3] === letter) && (gameBoard[6] === letter) ||
      (gameBoard[1] === letter) && (gameBoard[4] === letter) && (gameBoard[7] === letter) ||
      (gameBoard[2] === letter) && (gameBoard[5] === letter) && (gameBoard[8] === letter) ||
      // Diagonal lines
      (gameBoard[0] === letter) && (gameBoard[4] === letter) && (gameBoard[8] === letter) ||
      (gameBoard[2] === letter) && (gameBoard[4] === letter) && (gameBoard[6] === letter) )
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
      <Paper variant="outlined" sx={{my: 2, p: 4, textAlign: "center"}}>
        <Grid container wrap="wrap" direction="row" alignItems="center" justifyContent="center" ref={refs}>
          { gameBoard && gameBoard.length > 0 ? (
              gameBoard.map((string, index) => {
                return (
                  <Grid item xs={4} key={index} onClick={() => handleMarkBox(index)}>
                    <Box
                      component="div"
                      sx={{height: 90, border: 2}}
                    >
                      { !string ? <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> : <span>&nbsp;{string}&nbsp;</span> }
                    </Box>
                  </Grid>
                )
              })
            ) : null
          }
        </Grid>
      </Paper>
      {/* <PlayAgainResetButtons 
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
      /> */}
    </>
  );
}

export default GameBoard;
