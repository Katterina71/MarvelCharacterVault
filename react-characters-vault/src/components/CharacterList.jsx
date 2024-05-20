import React, { useContext } from 'react';
import MarvelContext from '../context/MarvelContext';

const CharacterList = () => {
  const { state, dispatch } = useContext(MarvelContext);
  const { characters, searchQuery } = state;

  // Ensure characters is defined before filtering
  const filteredCharacters = characters ? characters.filter(character =>
    character.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <ul>
      {filteredCharacters.map(character => (
        <li key={character.id} onClick={() => dispatch({ type: 'SET_SELECTED_CHARACTER', payload: character })}>
          {character.name}
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;

