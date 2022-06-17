import React, {useState, useEffect} from 'react';
import {Box, Paper, Stack} from '@mui/material';

const GameBoard = () => {

  const gameArray = [
    ["X", "X", "X"],
    ["X", "X", "X"],
    ["X", "X", "X"],
  ];

  const [gameBoard, setGameBoard] = useState<String[][]>(gameArray);

  useEffect(() => {
    console.log("gameBoard: ", gameBoard);
  }, []);

  return (
    <Paper variant="outlined">
      {gameBoard.map((array, arrayIndex) => {
        return (
          <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} key={arrayIndex} sx={{borderBottom: 2}}>
            {array.map((string, strIndex) => {
              return (
                <Box component="div" sx={{p: 2}} key={strIndex}>{string}</Box>
              );
            })}
          </Stack>
        );
      })}
    </Paper>
  );
}

export default GameBoard;
