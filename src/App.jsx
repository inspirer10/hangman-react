import React, { useState, useEffect, useCallback } from 'react';
import listOfWords from './listOfWords.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import './style.css';

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return listOfWords[Math.floor(Math.random() * listOfWords.length)];
    });

    const [guessedLetters, setGuessedLetters] = useState([]);
    const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    );

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess
        .split('')
        .every((letter) => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback(
        (letter) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return;

            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters, isLoser, isWinner]
    );

    useEffect(() => {
        const handler = (e) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) return;

            e.preventDefault();
            addGuessedLetter(key);
        };

        document.addEventListener('keypress', handler);

        return () => {
            document.removeEventListener('keypress', handler);
        };
    }, [guessedLetters]);

    return (
        <section className='container'>
            <div className='information'>
                {isWinner && 'Winner! - Refresh to try again'}
                {isLoser && 'Nice try - Refresh to try again'}
            </div>
            {isWinner || isLoser ? (
                <button
                    className='refreshButton'
                    onClick={() => window.location.reload()}
                >
                    Refresh Page
                </button>
            ) : null}

            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
            <HangmanWord
                guessedLetters={guessedLetters}
                wordToGuess={wordToGuess}
                reveal={isLoser}
            />
            <div style={{ alignSelf: 'stretch' }}>
                <Keyboard
                    disabled={isWinner || isLoser}
                    activeLetters={guessedLetters.filter((letter) =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />
            </div>
            <h1>{wordToGuess}</h1>
        </section>
    );
}

export default App;
