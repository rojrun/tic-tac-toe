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
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const useRefDimension = (ref: React.RefObject<HTMLElement>) => {
    const [elWidth, setElWidth] = useState<number>(1);
    useEffect(() => {
      if (ref.current) {
        const square = ref.current[4].getBoundingClientRect();
        console.log("square: ", square);
        setElWidth(square);
      }
    }, [ref]);
    return elWidth;
  }
  const widthDimension = useRefDimension(gridRefs);
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
    // Checks if currentPlayer is not empty & if the currentPlayer is "Computer"
    // Copy gameBoard and mark square with currentPlayer letter
    if ( (currentPlayer !== "") && (currentPlayer.includes("Computer")) ) {
      const newGameBoard = [...[gameBoard]][0];
      
      // Checks if newGameBoard is not undefined
      if ( newGameBoard && (newGameBoard.length > 0) ) {
        let randomIndex = 0;
        while (newGameBoard[randomIndex] !== "") {
          randomIndex = Math.floor(Math.random() * (newGameBoard.length - 1));
        }
        newGameBoard.splice(randomIndex, 1, letter);
        setTimeout(() => {
          setGameBoard(newGameBoard);
          checkForWinner();
        }, 1500);
      }
    } 
  });

  // useEffect(() => {
  //   if (gridRefs.current.length === 9) {
  //     // console.log("element 9 width: ", gridRefs.current[4].offsetWidth);
  //     const el4Width = gridRefs.current[4]!.clientWidth - 8;
  //     console.log("el4Width: ", el4Width);
  //     setElWidth(el4Width);
  //   }
  // }, [gameBoard]);

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

  const currentPlayerSetState = () => {
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
        currentPlayerSetState();
        break;
      case ( gameBoard && (gameBoard[3] === letter) && (gameBoard[4] === letter) && (gameBoard[5] === letter) ):
        setWinArray([3, 4, 5]);  
        currentPlayerSetState();
        break;
      case ( gameBoard && (gameBoard[6] === letter) && (gameBoard[7] === letter) && (gameBoard[8] === letter) ):
        setWinArray([6, 7, 8]);
        currentPlayerSetState();
        break;
        
      // Vertical lines
      case ( gameBoard && (gameBoard[0] === letter) && (gameBoard[3] === letter) && (gameBoard[6] === letter) ):
        setWinArray([0, 3, 6]);
        currentPlayerSetState();
        break;
      case ( gameBoard && (gameBoard[1] === letter) && (gameBoard[4] === letter) && (gameBoard[7] === letter) ):
        setWinArray([1, 4, 7]);
        currentPlayerSetState();
        break;
      case ( gameBoard && (gameBoard[2] === letter) && (gameBoard[5] === letter) && (gameBoard[8] === letter) ):
        setWinArray([2, 5, 8]);
        currentPlayerSetState();
        break;

      // Diagonal lines
      case ( gameBoard && (gameBoard[0] === letter) && (gameBoard[4] === letter) && (gameBoard[8] === letter) ):
        setWinArray([0, 4, 8]);
        currentPlayerSetState();
        break;
      case ( gameBoard && (gameBoard[2] === letter) && (gameBoard[4] === letter) && (gameBoard[6] === letter) ):
        setWinArray([2, 4, 6]);
        currentPlayerSetState();
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
                  <Grid item xs={4} key={index} onClick={() => !removeClick ? handleMarkBox(index) : null} ref={(el: HTMLDivElement) => (gridRefs.current.length !== gameBoard.length ? gridRefs.current.push(el) : null)}>
                    <Box
                      component="div"
                      height={widthDimension}
                      // height={gridRefs.current.length ? elWidth : 0}
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
