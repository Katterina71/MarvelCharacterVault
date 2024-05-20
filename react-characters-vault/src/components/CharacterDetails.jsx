import React, {useContext} from 'react'
import MarvelContext from '../context/MarvelContext'

export default function CharacterDetails() {

  const {state} = useContext(MarvelContext);
  const {selectedCharacter} = state;

  if (!selectedCharacter) {
    return <div>Select a character to see the details</div>
  }


  return (
    <div>
      <h2>{selectedCharacter.name}</h2>
      <img 
        src={`${selectedCharacter.thumbnail.path}.${selectedCharacter.thumbnail.extension}`}
        alt ={selectedCharacter.name}
      />
      <p>{selectedCharacter.description || 'No description available'}</p>
      <h3>Comics:</h3>
      <ul>
        {selectedCharacter.comics.items.map((comic, index) => (
            <li key={index}>{comic.name}</li>
        ))
        }
      </ul>
      <h3>Series:</h3>
      <ul>
        {selectedCharacter.series.items.map((series, index) => (
          <li key={index}>{series.name}</li>
        ))}
      </ul>
      <h3>Stories:</h3>
      <ul>
        {selectedCharacter.stories.items.map((story, index) => (
          <li key={index}>{story.name}</li>
        ))}
      </ul>
    </div>
  )
}

