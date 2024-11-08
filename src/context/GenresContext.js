import axios from 'axios';
import {createContext, useState, useEffect} from 'react';

const Genres = createContext();

const GenresProvider = ({children}) => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGenres = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Popular',
        type: 'genres',
        offset: '0',
        limit: '20',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': 'fd890a0df9msh1234ff5f952b7cdp1fd6eajsn040ea3fe8967',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data.genres.items;
      // "Popular" ifadesini kaldırma
      const cleanedData = data.map(genre => ({
        ...genre,
        data: {
          ...genre.data,
          name: genre.data.name.replace('Popular ', ''), // "Popular " ifadesini kaldırma
        },
      }));

      setGenres(cleanedData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getGenres();
  }, []);

  return (
    <Genres.Provider value={{genres, loading, error}}>
      {children}
    </Genres.Provider>
  );
};

export {Genres, GenresProvider};
