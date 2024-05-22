import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';

import { ColorRing } from 'react-loader-spinner' // Import spinner for loading data
import '../ButtonStyles.css'; // Import button styles

const CharacterList = ({ letter }) => {
  const { state, fetchCharacters, addFavorite } = useMarvel();
  const [disabledButtons, setDisabledButtons] = useState({});

useEffect(() => {
    if (!letter) return;
    fetchCharacters(letter);
  }, [letter]);


  const handleAddFavorite = (character) => {
    addFavorite(character);
    setDisabledButtons((prev) => ({ ...prev, [character.id]: true }));
  };

  useEffect(() => {
    // Re-enable all buttons if a favorite is removed
    setDisabledButtons({});
  }, [state.favorites]);


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
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
            <button onClick={() => handleAddFavorite(character)} disabled ={disabledButtons[character.id] || state.favorites.some(fav => fav.id === character.id)}>❤️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
