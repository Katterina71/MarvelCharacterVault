
import { Link } from 'react-router-dom';
import { useMarvel } from '../context/MarvelContext';
import { ColorRing } from 'react-loader-spinner' // Import spinner for loading data
import '../style/CharacterList.css'

const SearchResults = () => {
  const { state, addFavorite } = useMarvel();


  const handleAddFavorite = (character) => {
    addFavorite(character);
  };

  
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


  const characters = state.searchResults;

  return (
    <div className='main'>
      <h2>Search Results</h2>
      <div className = 'character-list'>
        {characters.map(character => (
          <div key={character.id} className="character-card character-link">
            <Link to={`/character/${character.id}`} className='character-link'>
            <span className='character-Name'>{character.name}</span>
            </Link>
            <button className='icon' onClick={() => handleAddFavorite(character)} disabled ={ state.favorites.some(fav => fav.id === character.id)}>❤️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
