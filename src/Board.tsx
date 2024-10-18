import React, { useEffect, useCallback } from 'react';
import './App.css';

interface BoardProps {
  setKeyStatuses: (
    value: { [key: string]: 'correct' | 'present' | 'absent' | '' } | 
    ((prevState: { [key: string]: 'correct' | 'present' | 'absent' | '' }) => 
    { [key: string]: 'correct' | 'present' | 'absent' | '' })
  ) => void;
  currentGuess: string;
  guessCount: number;
}

const Board: React.FC<BoardProps> = ( {setKeyStatuses, currentGuess, guessCount}: BoardProps ) => {
  const rows: string[][] = Array(6).fill(Array(5).fill(''));

  rows[0] = ['H', 'E', 'L', 'L', 'O'];

  const guessArray = currentGuess.split('');
  rows[guessCount] = guessArray.concat(Array(5-guessArray.length).fill(''));

  return (
    <div className='boardContainer'>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='rowContainer'>
          {row.map((letter, colIndex) => (
            <div key={colIndex} className='boardBox'>{letter}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
