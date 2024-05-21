import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { generateMarvelApiUrl } from '../api/marvelApi';
import '../CharacterDetail.css'; // Import the CSS file for styling

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      const url = generateMarvelApiUrl(`characters/${id}`);
      const response = await axios.get(url);
      setCharacter(response.data.data.results[0]);
    };

    fetchCharacterDetail();
  }, [id]);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="character-detail">
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
            <h3>Stories</h3>
            <ul>
              {character.stories.items.map((story) => (
                <li key={story.resourceURI}>
                  <a href={story.resourceURI}>{story.name}</a>
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
