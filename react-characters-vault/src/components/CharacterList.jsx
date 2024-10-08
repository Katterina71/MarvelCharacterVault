
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';

import { ColorRing } from 'react-loader-spinner' // Import spinner for loading data
import '../style/ButtonStyles.css'; // Import button styles
import '../style/CharacterList.css'

const CharacterList = ({ letter }) => {
  const { state, fetchCharacters, addFavorite } = useMarvel();


useEffect(() => {
    if (!letter) return;
    fetchCharacters(letter);
  }, [letter]);


  const handleAddFavorite = (character) => {
    addFavorite(character);
  };



// Loading wheel
  if (state.loading) {
    return (<ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />)
  }


  const characters = state.characters[letter] || [];

  return (
    <div>
      {letter && <h2>Characters starting with {letter}</h2>}
      <div className="character-list">
        {characters.map(character => (
          <div key={character.id} className="character-card character-link">
            <Link to={`/character/${character.id}`} className='character-link'>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="character-sm-image"
              />
            <span className='character-Name'>{character.name}</span>
            </Link>
            <button className='icon' onClick={() => handleAddFavorite(character)} disabled ={ state.favorites.some(fav => fav.id === character.id)}>❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
