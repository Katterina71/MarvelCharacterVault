import React from 'react';
import { useMarvel } from '../context/MarvelContext';

const Favorites = () => {
  const { state, removeFavorite } = useMarvel();

  if (state.favorites.length === 0) {
    return <p>No favorites yet</p>;
  }

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {state.favorites.map(character => (
          <li key={character.id}>
            {character.name}
            <button onClick={() => removeFavorite(character.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
