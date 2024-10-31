import React, { useEffect, useCallback } from 'react';
import './App.css';

interface KeyboardProps {
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
  onSubmitGuess: () => void;
  keyStatuses: { [key: string]: 'correct' | 'present' | 'absent' | '' };
}

const Keyboard = ({ currentGuess, setCurrentGuess, onSubmitGuess, keyStatuses }: KeyboardProps) => {
  const firstRowKeys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRowKeys = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRowKeys = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  // Input by clicking keyboard
  const handleKeyPress = useCallback(
    (key: string) => {
      if (key === 'Enter') {
        if (currentGuess.length === 5) {
          onSubmitGuess();
        }
      } else if (key === 'Backspace') {
        setCurrentGuess(currentGuess.slice(0, -1));
      } else if (currentGuess.length < 5) {
        setCurrentGuess(currentGuess + key);
      }
    },
    [currentGuess, setCurrentGuess, onSubmitGuess]
  );

  // Input by pressing keyboard
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace') {
        handleKeyPress('Backspace');
        return;
      } else if (event.key === 'Enter') {
        handleKeyPress('Enter');
        return;
      } else if (event.key.match(/^[a-zA-Z]$/)) {
        handleKeyPress(event.key.toUpperCase());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyPress]);

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {firstRowKeys.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className={keyStatuses[key]}
            tabIndex={-1}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {secondRowKeys.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className={keyStatuses[key]}
            tabIndex={-1}
          >
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        <button className="function" onClick={() => handleKeyPress('Enter')} tabIndex={-1}>
          Enter
        </button>
        {thirdRowKeys.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className={keyStatuses[key]}
            tabIndex={-1}         
          >
            {key}
          </button>
        ))}
        <button className="function" onClick={() => handleKeyPress('Backspace')} tabIndex={-1}>
          Backs
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
