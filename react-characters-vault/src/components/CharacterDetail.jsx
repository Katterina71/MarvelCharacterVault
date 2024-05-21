import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { generateMarvelApiUrl } from '../api/marvelApi';

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
    <div>
      <h1>{character.name}</h1>
      <p>{character.description}</p>
      <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
      <Link to="/">Back to list</Link>
    </div>
  );
};

export default CharacterDetail;
