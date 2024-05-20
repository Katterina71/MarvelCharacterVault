import React, { useReducer, useEffect } from 'react';
import axios  from 'axios';
import { generateMarvelApiUrl } from './marvelApi';
import {ACTION, marvelReducer} from './reducers/marvelReducers';
import './App.css'


function App() {

const initialState = {
    characters: [],
    searchQuery: '',
    selectedCharacter: null,
    favoriteCharacters: []
}

const [state, dispatch] = useReducer(marvelReducer, initialState)


useEffect (()=> {
      const endpoint = 'comics'; // You can change this to any Marvel API endpoint
      const url = generateMarvelApiUrl(endpoint);
      axios.get(url)
      .then(response => {
        dispatch({ type: ACTION.SET_CHARACTERS, payload: response.data.data.results });
        console.log('Successful connection!')
        console.log(state)
      })
      .catch(error => console.error('Error fetching characters:', error));
  },[])



  return (
    <>
      
    </>
  )
}

export default App
