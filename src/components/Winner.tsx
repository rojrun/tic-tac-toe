import React from 'react';

interface WinnerProps {
  currentPlayer: string;
}

const Winner = ({currentPlayer}: WinnerProps) => {
  return (
    <>
      <h1 id="winner">{currentPlayer} wins!</h1>
    </>
  );
}

export default Winner;