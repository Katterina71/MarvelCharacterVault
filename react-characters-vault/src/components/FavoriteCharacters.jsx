import React, { useContext } from 'react';
import MarvelContext from '../context/MarvelContext';

const FavoriteCharacters = () => {
  const { state, dispatch } = useContext(MarvelContext);
  const { favoriteCharacters } = state;

  const handleRemove = (characterId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: characterId });
  };

  return (
    <ul>
      {favoriteCharacters.map(character => (
        <li key={character.id}>
          {character.name}
          <button onClick={() => handleRemove(character.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default FavoriteCharacters;
