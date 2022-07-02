import React, {useState, useEffect} from 'react';
import {Container, Paper} from '@mui/material';
import Winner from './Winner';
import StartGame from './StartGame';
import Players from './Players';
import GameBoard from './GameBoard';
import '../sass/App.scss';

const App = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const [playerX, setPlayerX] = useState<string>("");
  const [playerO, setPlayerO] = useState<string>("");
  const [currentPlayer, setCurrentPlayer] = useState<string>("");
  const [totalGameCount, setTotalGameCount] = useState<number>(1);
  const [xWins, setXWins] = useState<number>(0);
  const [oWins, setOWins] = useState<number>(0);
  const [showWinner, setShowWinner] = useState<boolean>(false);
  
  useEffect(() => {
    if ( (xWins !== 0) || (oWins !== 0) ) {
      setShowWinner(true);
    }
  }, [xWins, oWins]);

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{my: 2, textAlign: "center"}}>
        { showWinner 
          ? <Winner currentPlayer={currentPlayer} />
          : <h1 id="title">TIC TAC TOE</h1> 
        }
      </Paper>
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
            setVisible={setVisible}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
            playerX={playerX}
            setPlayerX={setPlayerX}
            playerO={playerO}
            setPlayerO={setPlayerO}
            xWins={xWins}
            setXWins={setXWins}
            oWins={oWins}
            setOWins={setOWins}
            totalGameCount={totalGameCount}
            setTotalGameCount={setTotalGameCount}
            setShowWinner={setShowWinner}
          />
        </>
      }
    </Container>
  );
}

export default App;
