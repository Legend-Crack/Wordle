import React, { useState } from 'react';
import './App.css';

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

  return (
    <div className="App">
      <h1>Wordle</h1>
      {/* <Board /> */}
      {/* <Keyboard /> */}
    </div>
  );
}

export default App;
