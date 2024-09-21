import React, { useEffect } from 'react';

interface KeyboardProps {
  currentGuess: string;
  setCurrentGuess: (guess: string) => void;
  onSubmitGuess: () => void;
}

const Keyboard = ({ currentGuess, setCurrentGuess, onSubmitGuess }: KeyboardProps) => {
  const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ];

  // input by clicking keyboard
  const handleKeyPress = (key: string) => {
    if (key === 'Enter') {
      onSubmitGuess();
      setCurrentGuess('');
    } else if (key === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key);
    }
  };

  // input by pressing keyboard
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
  }, [currentGuess]);

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {keys.slice(0, 10).map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        {keys.slice(10, 19).map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
      </div>
      <div className="keyboard-row">
        <button onClick={() => handleKeyPress('Enter')}>Enter</button>
        {keys.slice(19).map((key) => (
          <button key={key} onClick={() => handleKeyPress(key)}>
            {key}
          </button>
        ))}
        <button onClick={() => handleKeyPress('Backspace')}>Backspace</button>
      </div>
    </div>
  );
};

export default Keyboard;
