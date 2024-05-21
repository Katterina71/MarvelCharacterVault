
import { Link } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';

const SearchResults = () => {
  const { state, addFavorite } = useMarvel();

  if (state.loading) {
    return <p>Loading...</p>;
  }

  const characters = state.searchResults;

  return (
    <div>
      <h2>Search Results</h2>
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

export default SearchResults;
