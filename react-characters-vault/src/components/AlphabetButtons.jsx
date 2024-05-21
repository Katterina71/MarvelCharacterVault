import React from 'react';
import { useMarvel } from '../context/MarvelContext';

const AlphabetButtons = ({ onLetterClick }) => {
  const { fetchCharacters } = useMarvel();
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div>
      {alphabet.map(letter => (
        <button key={letter} onClick={() => onLetterClick(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default AlphabetButtons;
