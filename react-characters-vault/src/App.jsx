import React, { useReducer, useEffect } from 'react';
import axios  from 'axios';
import { generateMarvelApiUrl } from './marvelApi';
import marvelReducer from './reducers/marvelReducers';

// import CharacterList from './components/CharacterList'
import SearchBar from './components/SearchBar';
import CharacterList from './components/CharacterList';
import FavoriteCharacters from './components/FavoriteCharacters';
import MarvelContext from './context/MarvelContext';
import CharacterDetails from './components/CharacterDetails';

import './App.css'



function App() {

const initialState = {
    characters: [],
    searchQuery: '',
    selectedCharacter: null,
    favoriteCharacters: []
}

const [state, dispatch] = useReducer(marvelReducer, initialState)



useEffect(() => {
  const fetchData = async () => {
    try {
      const endpoint = 'characters';
      const url = generateMarvelApiUrl(endpoint);
      const response = await axios.get(url);
      dispatch({ type: 'SET_CHARACTERS', payload: response.data.data.results });
    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };

  fetchData();
}, []);


  return (
    <MarvelContext.Provider value={{ state, dispatch }}>
      <div>
        <h1>Marvel Character Explorer</h1>
        <SearchBar />
        <CharacterList />
        <CharacterDetails />
        <FavoriteCharacters />
      </div>

    </MarvelContext.Provider>
  )
}

export default App
