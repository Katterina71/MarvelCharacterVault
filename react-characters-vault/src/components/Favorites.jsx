
import React from 'react';
import { useMarvel } from '../context/MarvelContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { state, removeFavorite } = useMarvel();

  if (state.favorites.length === 0) {

    return <p>No favorites yet</p>;
  }

  return (
    <div className='main'>
      <h2>Favorites</h2>
      <ul>
        {state.favorites.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
            <button className='icon' onClick={() => removeFavorite(character.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
