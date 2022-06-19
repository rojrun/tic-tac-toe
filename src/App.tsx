import React, {useState, useEffect} from 'react';
import {Container, Paper} from '@mui/material';
import StartGame from './components/StartGame';
import Players from './components/Players';
import GameBoard from './components/GameBoard';
import './App.css';

const App = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [playerX, setPlayerX] = useState<string>("");
  const [playerO, setPlayerO] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<string>("");
  const [totalGameCount, setTotalGameCount] = useState<number>(1);
  const [xWins, setXWins] = useState<number>(0);
  const [oWins, setOWins] = useState<number>(0);
  
  useEffect(() => {
    console.log("currentPlayer: ", currentPlayer);
    console.log("xWins: ", xWins);
    console.log("oWins: ", oWins);
  }, [currentPlayer, xWins, oWins]);

  return (
    <Container maxWidth="sm">
      <Paper variant="outlined">TIC TAC TOE</Paper>
      { visible &&
        <StartGame 
          setVisible={setVisible} 
          setPlayerX={setPlayerX} 
          setPlayerO={setPlayerO}
          setCurrentPlayer={setCurrentPlayer}
        /> 
      }
      { !visible &&
        <>
          <Players 
            playerX={playerX}
            playerO={playerO}
            currentPlayer={currentPlayer} 
            xWins={xWins} 
            oWins={oWins} 
            totalGameCount={totalGameCount} 
          />
          <GameBoard
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            xWins={xWins}
            setXWins={setXWins}
            oWins={oWins}
            setOWins={setOWins}
            totalGameCount={totalGameCount} 
            setTotalGameCount={setTotalGameCount} 
          />
        </>
      }
    </Container>
  );
}

export default App;
