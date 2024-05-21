import React from 'react';
import { Link } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';

const CharacterList = ({ letter }) => {
  const { state, fetchCharacters, addFavorite } = useMarvel();

  React.useEffect(() => {
    fetchCharacters(letter);
  }, [letter]);

  if (state.loading) {
    return <p>Loading...</p>;
  }

  const characters = state.characters[letter] || [];

  return (
    <div>
      <h2>Characters starting with {letter}</h2>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
            <button onClick={() => addFavorite(character)}>❤️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
