import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
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
  setShowWinner: Function;
  winArray: Array<number>;
  setWinArray: Function;
  setTiedGame: Function;
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
    setShowWinner,
    winArray,
    setWinArray,
    setTiedGame
  }: GameBoardProps) => {

  const [gameBoard, setGameBoard] = useState<string[] | undefined>();
  const [showPlayAgainBttn, setShowPlayAgainBttn] = useState<boolean>(false);
  const [removeClick, setRemoveClick] = useState<boolean>(false);
  const [elWidth, setElWidth] = useState<number>(1);
  const gridRefs = useRef<(HTMLElement | null)[]>([]);
  const letter = (currentPlayer.split(" "))[1];
  
  useEffect(() => {
    // Create an array of empty strings
    const initialArray: string[] = [];
    for (let i = 0; i < 9; i++) {
      initialArray.push("");
    }
    setGameBoard(initialArray);
  }, []);

  useEffect(() => {
    // Checks if the currentPlayer is "Computer"
    // Copy gameBoard and mark square with currentPlayer letter
    setTimeout(() => {
      if (currentPlayer.includes("Computer")) {  
        const newGameBoard = [...[gameBoard]][0];
        
        // Checks if newGameBoard is not undefined
        if ( newGameBoard && (newGameBoard.length > 0) ) {
          let randomIndex = 0;
          while (newGameBoard[randomIndex] !== "") {
            randomIndex = Math.floor(Math.random() * newGameBoard.length);
          }
          newGameBoard.splice(randomIndex, 1, letter);
          setGameBoard(newGameBoard);
          checkForWinner();
        }
      }
    }, 1500); 
  }, [currentPlayer, gameBoard]);

  useEffect(() => {
    getSquareWidth();
  }, [gameBoard]);

  useLayoutEffect(()=> {
    window.addEventListener('resize', getSquareWidth);
  });

  const getSquareWidth = () => {
    const square = gridRefs?.current[4]?.firstElementChild?.getBoundingClientRect()?.width;
    if (square) {
      setElWidth(square - 8);
    }
  }

  const handleMarkBox = (arrayIndex: number) => {
    const newGameBoard = [...[gameBoard]][0];
    if ( newGameBoard && (newGameBoard.length > 0) ) {
      if (newGameBoard[arrayIndex] === "") {
        newGameBoard.splice(arrayIndex, 1, letter);
        setGameBoard(newGameBoard);
        checkForWinner();
      }
    }
  }

  const switchPlayer = () => {
    if (currentPlayer.includes("X")) {
      setXWins(++xWins);
      setShowPlayAgainBttn(true);
      setRemoveClick(true);
    } else {
      setOWins(++oWins);
      setShowPlayAgainBttn(true);
      setRemoveClick(true);
    }
  }

  const checkForWinner = () => {
    switch(true) {
      // Horizontal lines
      case ( gameBoard && (gameBoard[0] === letter) && (gameBoard[1] === letter) && (gameBoard[2] === letter) ):
        setWinArray([0, 1, 2]);
        switchPlayer();
        break;
      case ( gameBoard && (gameBoard[3] === letter) && (gameBoard[4] === letter) && (gameBoard[5] === letter) ):
        setWinArray([3, 4, 5]);  
        switchPlayer();
        break;
      case ( gameBoard && (gameBoard[6] === letter) && (gameBoard[7] === letter) && (gameBoard[8] === letter) ):
        setWinArray([6, 7, 8]);
        switchPlayer();
        break;
        
      // Vertical lines
      case ( gameBoard && (gameBoard[0] === letter) && (gameBoard[3] === letter) && (gameBoard[6] === letter) ):
        setWinArray([0, 3, 6]);
        switchPlayer();
        break;
      case ( gameBoard && (gameBoard[1] === letter) && (gameBoard[4] === letter) && (gameBoard[7] === letter) ):
        setWinArray([1, 4, 7]);
        switchPlayer();
        break;
      case ( gameBoard && (gameBoard[2] === letter) && (gameBoard[5] === letter) && (gameBoard[8] === letter) ):
        setWinArray([2, 5, 8]);
        switchPlayer();
        break;

      // Diagonal lines
      case ( gameBoard && (gameBoard[0] === letter) && (gameBoard[4] === letter) && (gameBoard[8] === letter) ):
        setWinArray([0, 4, 8]);
        switchPlayer();
        break;
      case ( gameBoard && (gameBoard[2] === letter) && (gameBoard[4] === letter) && (gameBoard[6] === letter) ):
        setWinArray([2, 4, 6]);
        switchPlayer();
        break;
        
      // Else
      default:
        // Check array for empty string
        if (gameBoard && gameBoard.includes("")) {
          // Switch currentPlayer
          if (currentPlayer.includes("X")) {
            setCurrentPlayer(playerO);
          } else {
            setCurrentPlayer(playerX);
          }

        } else {
          // Tied game
          setTiedGame(true);
          setShowPlayAgainBttn(true);
        }  
        break;
    }
  }

  return (
    <>
      <Paper elevation={10} id="game_board" sx={{my: 2, p: 4, textAlign: "center"}}>
        <Grid container wrap="wrap" direction="row" alignItems="center" justifyContent="center">
          { gameBoard && gameBoard.length > 0 ? (
              gameBoard.map((string, index) => {
                return (
                  <Grid item xs={4} key={index} onClick={() => !removeClick ? handleMarkBox(index) : null} ref={(el: HTMLDivElement) => (gridRefs.current?.length !== gameBoard.length ? gridRefs.current?.push(el) : null)}>
                    <Box
                      component="div"
                      height={elWidth}
                    >
                      <span className={winArray.includes(index) ? "text_shadows" : ""}>{!string ? <>&nbsp;</> : string}</span>
                    </Box>
                  </Grid>
                )
              })
            ) : null
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
        setGameBoard={setGameBoard}
        setShowWinner={setShowWinner}
        setRemoveClick={setRemoveClick}
        setWinArray={setWinArray}
        setTiedGame={setTiedGame}
      />
    </>
  );
}

export default GameBoard;
