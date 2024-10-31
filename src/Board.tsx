// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useState } from 'react';
import './App.css';

interface BoardProps {
  guesses: string[]
  currentGuess: string;
  guessCount: number;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Board: React.FC<BoardProps> = ( {guesses, currentGuess, guessCount}: BoardProps ) => {
  const [rows, setRows] = useState<string[][]>(Array(6).fill(Array(5).fill('')));

  // 현재 입력 중인 guess를 rows 배열에 반영
  useEffect(() => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      updatedRows[guessCount] = currentGuess.split('').concat(Array(5 - currentGuess.length).fill(''));
      return updatedRows;
    });
  }, [currentGuess, guessCount]);

  // guesses 배열을 기반으로 rows 업데이트
  useEffect(() => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      guesses.forEach((guess, index) => {
        updatedRows[index] = guess.split('');
      });
      return updatedRows;
    });
  }, [guesses]);

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
