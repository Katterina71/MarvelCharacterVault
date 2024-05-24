
import { useMarvel } from '../context/MarvelContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { state, removeFavorite,removeAllFavorite } = useMarvel();

  if (state.favorites.length === 0) {

    return <p className='main'>No favorites yet</p>;
  }

  return (
    <div className='main'>
      <h2>Favorites</h2>
      <div className="character-list">
        {state.favorites.map(character => (
          <div key={character.id} className="character-card character-link">
            <Link to={`/character/${character.id}`} className='character-link'>
            <span className='character-Name'>{character.name}</span>
            </Link>
            <button className='icon' onClick={() => removeFavorite(character.id)}>❌</button>
          </div>
        ))}
      </div>
      <button onClick={() => removeAllFavorite()}>Remove All</button>
    </div>
  );
};

export default Favorites;
