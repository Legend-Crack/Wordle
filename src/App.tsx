import React, { useState } from 'react';
import './App.css';
import Keyboard from './Keyboard';

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

  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* <Board /> */}
      <Keyboard 
        currentGuess={currentGuess} 
        setCurrentGuess={setCurrentGuess} 
        onSubmitGuess={() => {}}
      />
      <p>Current Guess: {currentGuess}</p>
    </div>
  );
}

export default App;
