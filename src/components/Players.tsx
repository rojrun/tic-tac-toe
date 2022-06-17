import React from 'react';
import {Paper, Stack} from '@mui/material';

const Players = ({playerOne, playerTwo, playerCount, xWins, oWins, totalGameCount, setTotalGameCount, isComputer}: any) => {  
  
  // const makePlayer = (char: string, title: string = "") => {
  //   return (
  //     <Paper variant="outlined">
  //       <p>{title && playerCount === 2 ? "Player" : "Computer"} {char}</p>
  //       <p>score: {char === "X" ? xWins : oWins} out of {totalGameCount}</p>
  //     </Paper>
  //   );
  // }
  
  return (
    <Stack direction="row" justifyContent="space-around" alignItems="flex-start" spacing={2}>
      <Paper variant="outlined">
        <p>Player {playerOne}</p>
        <p>score: {playerOne === "X" ? xWins : oWins} out of {totalGameCount}</p>
      </Paper>
      <Paper variant="outlined">
        <p>{isComputer ? "Computer" : "Player"} {playerTwo}</p>
        <p>score: {playerTwo === "X" ? oWins : xWins} out of {totalGameCount}</p>
      </Paper>
    </Stack>
  );
}

export default Players;
