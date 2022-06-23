import React from 'react';
import {Paper, Stack} from '@mui/material';

interface PlayersProps {
  playerX: string;
  playerO: string;
  currentPlayer: string;
  xWins: number;
  oWins: number;
  totalGameCount: number;
}

const Players = (
  {
    playerX,
    playerO,
    currentPlayer,
    xWins,
    oWins,
    totalGameCount
  }: PlayersProps) => {  
  
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2} sx={{my: 2, textAlign: "center"}}>
      <Paper variant="outlined" sx={{px: 2, width: 1, border: (currentPlayer.includes("X")) ? 3 : null}}>
        <p>{playerX}</p>
        <p>score: {xWins} out of {totalGameCount}</p>
      </Paper>
      <Paper variant="outlined" sx={{px: 2, width: 1, border: (currentPlayer.includes("O")) ? 3 : null}}>
        <p>{playerO}</p>
        <p>score: {oWins} out of {totalGameCount}</p>
      </Paper>
    </Stack>
  );
}

export default Players;
