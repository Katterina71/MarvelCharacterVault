import { createContext, useReducer, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import { generateMarvelApiUrl } from '../api/marvelApi';
import { initialState, marvelReducer } from '../reducers/marvelReducer';

const MarvelContext = createContext();

const MarvelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(marvelReducer, initialState);
  const initialLoad = useRef(true); // This allows us to track whether the initial load has occurred.

// Load favorites from localStorage when the app initializes
useEffect(() => {
  const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  console.log('Loaded favorites from localStorage:', savedFavorites); // Debugging
  dispatch({ type: 'SET_FAVORITES', payload: savedFavorites });
}, []);

// Save favorites to localStorage whenever the favorites state changes, except on initial load
useEffect(() => {
  if (initialLoad.current) {
    initialLoad.current = false;
    return;
  }

  console.log('Saving favorites to localStorage:', state.favorites); // Debugging
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
}, [state.favorites]);



  const fetchCharacters = async (letter) => {
    const url = generateMarvelApiUrl('characters', 100, 0) + `&nameStartsWith=${letter}`;

    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get(url);
      dispatch({
        type: 'FETCH_SUCCESS',
        payload: { letter, characters: response.data.data.results },
      });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
  };

  const searchCharacters = async (query) => {
    const url = generateMarvelApiUrl('characters', 100, 0) + `&nameStartsWith=${query}`;

    try {
      dispatch({ type: 'SET_LOADING' });
      const response = await axios.get(url);
      dispatch({
        type: 'SEARCH_SUCCESS',
        payload: { characters: response.data.data.results },
      });
    } catch (error) {
      dispatch({ type: 'FETCH_FAILURE', payload: error.message });
    }
  };

  const addFavorite = (character) => {
    dispatch({ type: 'ADD_FAVORITE', payload: character });
  };

  const removeFavorite = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return (
    <MarvelContext.Provider value={{ state, fetchCharacters, searchCharacters, addFavorite, removeFavorite }}>
      {children}
    </MarvelContext.Provider>
  );
};

const useMarvel = () => {
  const context = useContext(MarvelContext);
  if (context === undefined) {
    throw new Error('useMarvel must be used within a MarvelProvider');
  }
  return context;
};

export { MarvelProvider, useMarvel };
