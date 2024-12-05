import React from 'react';
import CharacterItem from './CharacterItem';

function CharacterList({ characters }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {characters.length === 0 ? (
        <p>No se encontraron personajes.</p> // Improved error message
      ) : (
        characters.map((character) => (
          <CharacterItem key={character.id} character={character} /> // Use `character.id` for unique key
        ))
      )}
    </ul>
  );
}

export default CharacterList;