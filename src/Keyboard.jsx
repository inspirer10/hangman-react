import React from 'react';

const KEYS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'w',
    'x',
    'y',
    'z',
];

function Keyboard({
    disabled = false,
    activeLetters,
    inactiveLetters,
    addGuessedLetter,
}) {
    return (
        <div className='keyboard'>
            {KEYS.map((key) => {
                const isActive = activeLetters.includes(key);
                const isInactive = inactiveLetters.includes(key);
                return (
                    <button
                        onClick={() => addGuessedLetter(key)}
                        className={`letter ${isActive ? 'active' : ''}
                        ${isInactive ? 'inactive' : ''}`}
                        disabled={isInactive || isActive || disabled}
                        key={key}
                    >
                        {key}
                    </button>
                );
            })}
        </div>
    );
}

export default Keyboard;
