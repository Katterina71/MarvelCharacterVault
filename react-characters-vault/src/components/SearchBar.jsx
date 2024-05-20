import React, {useContext} from 'react'
import MarvelContext from '../context/MarvelContext'

export default function SearchBar() {

    const {dispatch} = useContext(MarvelContext);
    const handleSearch = (event) => {
        dispatch ({type: 'SET_SEARCH_QUERY', payload:event.target.value})
    }
    
  return (
    <input type='text' placeholder='Search characters' onChange={handleSearch}></input>
  )
}
