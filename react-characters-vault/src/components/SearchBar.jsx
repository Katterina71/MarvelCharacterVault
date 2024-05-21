import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { searchCharacters } = useMarvel();
  const navigate = useNavigate();

  const handleSearch = async () => {
    await searchCharacters(query);
    navigate('/search');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search characters"
      onKeyPress={handleKeyPress}
    />
    <button onClick={handleSearch}>Search</button>
  </div>
  );
};

export default SearchBar;
