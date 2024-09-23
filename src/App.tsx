import React, { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import Board from './Board';

const App = () => {
  // const [solution, setSolution] = useState('REACT');
  // const [guesses, setGuesses] = useState<string[]>([]);

  // const handleGuess = (guess: string) => {
  //   if (guesses.length < 6 && guess.length === 5) {
  //     setGuesses([...guesses, guess]);
  //     if (guess === solution) {
  //       alert('You win!');
  //     }
  //   }
  // }

  const [currentGuess, setCurrentGuess] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [keyStatuses, setKeyStatuses] = useState<{ [key: string]: 'correct' | 'present' | 'absent' | '' }>({
    Q: 'correct', W: 'present', E: 'absent', R: '', T: '', Y: '', U: '', I: '', O: '', P: '',
    A: '', S: '', D: '', F: '', G: '', H: '', J: '', K: '', L: '',
    Z: '', X: '', C: '', V: '', B: '', N: '', M: ''
  });

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Board />
      <Keyboard 
        currentGuess={currentGuess} 
        setCurrentGuess={setCurrentGuess} 
        onSubmitGuess={() => {}}
        keyStatuses={keyStatuses}
      />
      <p>Current Guess: {currentGuess}</p>
    </div>
  );
}

export default App;
