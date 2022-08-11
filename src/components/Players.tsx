import React from 'react';
import {PlayersProps} from '../types';
import {Paper, Stack} from '@mui/material';

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
    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{my: 2, textAlign: "center"}}>
      <Paper elevation={10} id="player_x" className={(currentPlayer.includes("X")) ? "playerBorder" : ""} sx={{px: 2, width: 1}}>
        <p>{playerX}</p>
        <p>wins: {xWins} out of {totalGameCount}</p>
      </Paper>
      <Paper elevation={10} id="player_o" className={(currentPlayer.includes("O")) ? "playerBorder" : ""} sx={{px: 2, width: 1}}>
        <p>{playerO}</p>
        <p>wins: {oWins} out of {totalGameCount}</p>
      </Paper>
    </Stack>
  );
}

export default Players;
