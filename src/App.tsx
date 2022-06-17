import React, {useState, useEffect} from 'react';
import {Container, Paper} from '@mui/material';
import StartGame from './components/StartGame';
import Players from './components/Players';
import GameBoard from './components/GameBoard';
import './App.css';

const App = () => {
  const [visible, setVisible] = useState(true);
  const [playerCount, setPlayerCount] = useState(null);
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [isComputer, setIsComputer] = useState(false);
  const [totalGameCount, setTotalGameCount] = useState(1);
  const [xWins, setXWins] = useState(0);
  const [oWins, setOWins] = useState(0);
  // const [gameBoard, setGameBoard] = useState([]);

  useEffect(() => {
    console.log("playerCount: ", playerCount);
    console.log("playerOne: ", playerOne);
    console.log("playerTwo: ", playerTwo);
    console.log("isComputer: ", isComputer);
  }, [playerCount, playerOne, playerTwo, isComputer]);

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined">TIC TAC TOE</Paper>
      { visible &&
        <StartGame 
          setPlayerCount={setPlayerCount} 
          setVisible={setVisible} 
          setPlayerOne={setPlayerOne} 
          setPlayerTwo={setPlayerTwo} 
          setIsComputer={setIsComputer} 
        /> 
      }  
      { !visible &&
        <>
          <Players 
            playerOne={playerOne}
            playerTwo={playerTwo} 
            playerCount={playerCount} 
            xWins={xWins} 
            oWins={oWins} 
            totalGameCount={totalGameCount} 
            setTotalGameCount={setTotalGameCount} 
            isComputer={isComputer} 
          />
          <GameBoard />
        </>
      }
    </Container>
  );
}

export default App;
