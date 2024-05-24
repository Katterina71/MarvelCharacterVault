import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { generateMarvelApiUrl } from '../api/marvelApi';
import {useMarvel} from '../context/MarvelContext'
import '../style/CharacterDetail.css'; // Import the CSS file for styling
import '../index.css'

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const {state, addFavorite } = useMarvel();

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      const url = generateMarvelApiUrl(`characters/${id}`);
      const response = await axios.get(url);
      setCharacter(response.data.data.results[0]);
    };

    fetchCharacterDetail();
  }, [id]);


  const handleAddFavorite = (character) => {
    addFavorite(character);
  };


  if (!character) {
    return <p>Loading...</p>;
  }
  
  //Referral links do not work on https://www.marvel.com/
  // const wikiUrl = character.urls.find(url => url.type === 'wiki')?.url;
  // const detailUrl = character.urls.find(url => url.type === 'detail')?.url;

  const comiclinkUrl = character.urls.find(url => url.type === 'comiclink')?.url;

  return (
    <div className="character-detail main">
      <Link to="/" className="back-link">Back to list</Link>
      <div className="character-header">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          className="character-image"
        />
        <div className="character-info">
          <h1>{character.name}</h1>
          <p>{character.description || "No description available."}</p>
          <button className='icon' onClick={() => handleAddFavorite(character)} disabled ={ state.favorites.some(fav => fav.id === character.id)}>❤️</button>
          <div className="character-links">
            {/* {wikiUrl && <a href={wikiUrl} target="_blank" rel="noopener noreferrer">Wiki</a>}
            {detailUrl && <a href={detailUrl} target="_blank" rel="noopener noreferrer">Details</a>} */}
            {comiclinkUrl && <a href={comiclinkUrl} target="_blank" rel="noopener noreferrer">Comic Link</a>}
          </div>
        </div>
      </div>
      <div className="character-details">
        <h2>Details</h2>
        <div className="character-sections">
          <div className="character-section">
            <h3>Series</h3>
            <ul>
              {character.series.items.map((series) => (
                <li key={series.resourceURI}>
                  <a href={series.resourceURI}>{series.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="character-section">
            <h3>Comics</h3>
            <ul>
              {character.comics.items.map((comic) => (
                <li key={comic.resourceURI}>
                  <a href={comic.resourceURI}>{comic.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="character-section">
            <h3>Events</h3>
            <ul>
              {character.events.items.map((event) => (
                <li key={event.resourceURI}>
                  <a href={event.resourceURI}>{event.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
