
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
      <div className="character-list">
        {state.favorites.map(character => (
          <div key={character.id} className="character-card">
            <Link to={`/character/${character.id}`} className='character-link'>
            <span className='character-Name'>{character.name}</span>
            <button className='icon' onClick={() => removeFavorite(character.id)}>❌</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
