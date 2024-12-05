import React from 'react';

function CharacterItem({ character }) { // Destructure props for clarity
  return (
    <li style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
      {character && (
        <div>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Especie: {character.species}</p>
          <p>Género: {character.gender}</p>
          {/* <p>Origen: {character.origin.name}</p>  */}
        </div>
      )}
    </li>
  );
}

export default CharacterItem;