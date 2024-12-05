// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [character, setCharacter] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchCharacter = async () => {
//       setIsLoading(true);
//       setError('');

//       try {
//         const response = await axios.get('https://rickandmortyapi.com/api/character/1', {
//           // Puedes cambiar el ID del personaje aquí (1 es Rick Sanchez)
//         });
//         setCharacter(response.data);
//       } catch (error) {
//         setError('Hubo un problema al obtener la información del personaje');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCharacter();
//   }, []);

//   return (
//     <div>
//       {isLoading && <p>Cargando...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {character && (
//         <div>
//           <h2>{character.name}</h2>
//           <img src={character.image} alt={character.name} />
//           <p>Especie: {character.species}</p>
//           <p>Género: {character.gender}</p>
//           <p>Origen: {character.origin.name}</p>
//           {/* Puedes agregar más propiedades según tus necesidades */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CharacterList from './CharacterList';
// import Search from './Search';

// function App() {
//   const [characters, setCharacters] = useState([]); // Array to store characters
//   const [isLoading, setIsLoading] = useState(false); // Loading state
//   const [error, setError] = useState(''); // Error state
//   const [searchTerm, setSearchTerm] = useState(''); // State for search term

//   // Fetch characters on initial render and on search term change
//   useEffect(() => {
//     const fetchCharacters = async (query) => {
//       setIsLoading(true);
//       setError('');

//       try {
//         const response = await axios.get(`https://rickandmortyapi.com/api/character?name=${query}`); // Corrected API endpoint for characters

//         setCharacters(response.data.results);
//       } catch (error) {
//         setError('Hubo un problema de conexion con la API');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCharacters(searchTerm); 
//   }, [searchTerm]); 

//   const handleSearch = (query) => {
//     setSearchTerm(query.toLowerCase()); 
//   };

//   return (
//     <div style={{ maxWidth: '800px', margin: 'auto' }}>
//       <h2>Buscar personajes</h2>
//       <Search onSearch={handleSearch} />
//       {isLoading && <p>Cargando...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <CharacterList characters={characters} />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import axios from 'axios';
import MovieList from './MovieList';
import Search from './Search';


function App(){
  const [movies, setMovies] = useState([]);// estado para almacenar la pelicula
  const [isLoading, setIsLoading] = useState(false);//gestiona los datos de carga si estan en proceso
  const [error, setError] = useState('');// manejo el estado de errores

  //funcion para buscar pelicula
  const fetchMovies = async (query) => {// hace la solicitud http
    //iniciar estado de carga
    setIsLoading(true);
    setError('');//limpia el error previo a la solicitud

    try {
      //realizar la solicitud de la API
      const {data} = await axios.get('http://www.omdbapi.com/',{
        params: {
          s: query,
          apikey: 'f9c798b3',//
        },
      });

      //comprobar respuesta y actualizacion de estado
      if (data.Response === 'True'){
        setMovies(data.Search);//guarda la lista de peliculas
      }else{
        setError(data.Error);//
      }
    } catch (error){
      setError('Hubo un problema de conexion con la api');
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <div style={{maxWidth: '800px', margin: 'auto'}}>
      <h2 style={{ textAlign:'center'}}>Buscar pelicula</h2>
      <Search onSearch={fetchMovies}/>
      {isLoading && <p>Cargando......</p>}
      {error && <p style={{color: 'red'}}>{error}</p>}
      <MovieList movies={movies}/>
    </div>
  );
}
export default App