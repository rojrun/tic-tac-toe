/// <reference types="react-scripts" />

export interface StartGameProps {
  setVisible: Function;
  setPlayerX: Function;
  setPlayerO: Function;
  setCurrentPlayer: Function;
}

export interface PlayersProps {
  playerX: string;
  playerO: string;
  currentPlayer: string;
  xWins: number;
  oWins: number;
  totalGameCount: number;
}

export interface PlayAgainResetButtonsProps {
  showPlayAgainBttn: boolean;
  setShowPlayAgainBttn: Function;
  totalGameCount: number; 
  setTotalGameCount: Function;
  setVisible: Function;
  setCurrentPlayer: Function;
  playerX: string;
  setPlayerX: Function;
  setPlayerO: Function;
  setXWins: Function;
  setOWins: Function;
  setGameBoard: Function;
  setShowWinner: Function;
  setRemoveClick: Function;
  setWinArray: Function;
  setTiedGame: Function;
}

export interface GameBoardProps {
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
