// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import Board from './Board';

const App = () => {
  const [solution, setSolution] = useState('REACT');
  const [guesses, setGuesses] = useState<string[]>([]);
  // eslint-disable-next-line no-unused-vars
  const [guessCount, setGuessCount] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [keyStatuses, setKeyStatuses] = useState<{ [key: string]: 'correct' | 'present' | 'absent' | '' }>({
    Q: 'correct', W: 'present', E: 'absent', R: '', T: '', Y: '', U: '', I: '', O: '', P: '',
    A: '', S: '', D: '', F: '', G: '', H: '', J: '', K: '', L: '',
    Z: '', X: '', C: '', V: '', B: '', N: '', M: ''
  });
  // eslint-disable-next-line no-unused-vars
  const [words, setWords] = useState<string[]>([]);

  const handleGuess = (guess: string) => {
    if (guesses.length < 6 && guess.length === 5) {
      setGuesses([...guesses, guess]);
      if (guess === solution) {
        alert('You win!');
      }
    }
  }

  useEffect(() => {
    fetch('/words.txt')
      .then(response => response.text())
      .then(text => {
        const wordArray = text.split('\n').map(word => word.trim());
        setWords(wordArray);
        const randomWord = wordArray[getRandomInt(wordArray.length)];
        setSolution(randomWord.toUpperCase());
      })
      .catch(error => {
        console.error('Error fetching words:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Board 
        setKeyStatuses={setKeyStatuses}
        currentGuess={currentGuess}
        guessCount={guessCount}
      />
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

function getRandomInt(max: number): number {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] % max;
}

export default App;
