import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';

import { ColorRing } from 'react-loader-spinner'
import '../ButtonStyles.css'; // Import button styles

const CharacterList = ({ letter }) => {
  const { state, fetchCharacters, addFavorite } = useMarvel();

useEffect(() => {
    if (!letter) return;
    fetchCharacters(letter);
  }, [letter]);

  if (state.loading) {
    // return <p>Loading...</p>;
//   return (<ClipLoader
//   size={150}
//   aria-label="Loading Spinner"

// />)
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
            <button onClick={() => addFavorite(character)}>❤️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
