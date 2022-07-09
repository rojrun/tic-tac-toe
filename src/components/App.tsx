import React, {useState, useEffect} from 'react';
import {Container, Paper} from '@mui/material';
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
  const [winArray, setWinArray] = useState<number[]>([]);
  const [tiedGame, setTiedGame] = useState<boolean>(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if ( (xWins !== 0) || (oWins !== 0) ) {
      setShowWinner(true);
    }
  }, [xWins, oWins]);

  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{my: 2, textAlign: "center"}}>
        { showWinner 
          ? <h1 id="winner">{currentPlayer} wins!</h1>
          : tiedGame 
          ? <h1 id="tied_game">NO WINNER</h1>
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
            winArray={winArray}
            setWinArray={setWinArray}
            setTiedGame={setTiedGame}
          />
        </>
      }
    </Container>
  );
}

export default App;
