import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList';
import Search from './Search';

function App() {
  const [characters, setCharacters] = useState([]); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(''); 
  const [searchTerm, setSearchTerm] = useState(''); 


  useEffect(() => {
    const fetchCharacters = async (query) => {
      setIsLoading(true);
      setError('');

      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`); 
        setCharacters(response.data.results);
      } catch (error) {
        setError('Hubo un problema de conexion con la API');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters(searchTerm); 
  }, [searchTerm]); 

  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase()); 
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <h2>Buscar personajes</h2>
      <Search onSearch={handleSearch} />
      {isLoading && <p>Cargando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;