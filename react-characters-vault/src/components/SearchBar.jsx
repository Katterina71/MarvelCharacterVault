import React, { useState } from 'react';
import { useMarvel } from '../context/MarvelContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { fetchCharacters } = useMarvel();

  const handleSearch = () => {
    fetchCharacters(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search characters"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
