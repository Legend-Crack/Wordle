// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import Keyboard from './Keyboard';
import Board from './Board';

const App = () => {
  const [solution, setSolution] = useState('REACT');
  const [guesses, setGuesses] = useState<string[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [guessCount, setGuessCount] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [keyStatuses, setKeyStatuses] = useState<{ [key: string]: 'correct' | 'present' | 'absent' | '' }>({
    Q: '', W: '', E: '', R: '', T: '', Y: '', U: '', I: '', O: '', P: '',
    A: '', S: '', D: '', F: '', G: '', H: '', J: '', K: '', L: '',
    Z: '', X: '', C: '', V: '', B: '', N: '', M: ''
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [words, setWords] = useState<string[]>([]);
  
  const checkKeyStatuses = useCallback(() => {
    const guessArray = currentGuess.split('');
    let solutionCopy = solution.split('');
    const newKeyStatuses = { ...keyStatuses }; 
    // correct 확인
    guessArray.forEach((letter, letterIdx) => {
      if (letter === solution[letterIdx]) {
        newKeyStatuses[letter] = 'correct';
        solutionCopy[letterIdx] = '';
      }
    });
    // present 확인
    guessArray.forEach((letter) => {
      if (newKeyStatuses[letter] !== 'correct') {
        const index = solutionCopy.indexOf(letter);
        if (index !== -1) {
          newKeyStatuses[letter] = 'present';
          solutionCopy[index] = '';
        } else {
          newKeyStatuses[letter] = 'absent';
        }
      }
    });
    setKeyStatuses(newKeyStatuses);
  }, [currentGuess, solution, keyStatuses]);
  

  const onSubmitGuess = () => {
    checkKeyStatuses();
    handleGuess(currentGuess);
    setGuessCount(guessCount+1);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleGuess = (guess: string) => {
    if (guesses.length < 6 && guess.length === 5) {
      setGuesses([...guesses, guess]);
      setCurrentGuess('');
      if (guess === solution) {
        alert('You win!');
      }
    }
  }

  useEffect(() => {
    fetch('/wordle/words.txt')
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

  useEffect(() => {
    console.log(keyStatuses);
  }, [keyStatuses]);

  useEffect(() => {
    console.log(solution);
  }, [solution]);

  return (
    <div className="App">
      <h1>Wordle</h1>
      <Board 
        guesses={guesses}
        currentGuess={currentGuess}
        guessCount={guessCount}
      />
      <Keyboard 
        currentGuess={currentGuess} 
        setCurrentGuess={setCurrentGuess} 
        onSubmitGuess={onSubmitGuess}
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
