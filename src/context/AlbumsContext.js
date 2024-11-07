import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

const Albums = createContext();

const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]); // Popüler albümler için state
  const [recentAlbums, setRecentAlbums] = useState([]); // Yeni eklenen albümler için state
  const [madeFor, setMadeFor] = useState([]); // Made For albümleri için state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API'den veri çekmek için kullanılan fonksiyon
  const getData = async (query, setFunction) => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: query,
        type: 'albums',
        offset: '0',
        limit: '10',
        numberOfTopResults: '18',
      },
      headers: {
        'x-rapidapi-key': '16542e0184mshf352632a2e2fe8ap16d83ajsn2c7bc139301e',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      // API çağrısı yapılıyor
      const response = await axios.request(options);
      const albumItems = response.data.albums.items.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
        year: item.data.date.year,
      }));
      setFunction(albumItems); // Veriyi state'e ekliyoruz
      setLoading(false); // Yükleme durumunu false yapıyoruz
    } catch (err) {
      // Hata durumunda yapılacaklar
      console.error('Error during API request:', err);
      // Error handling: API yanıtı varsa
      if (err.response) {
        console.log('Error response:', err.response.data); // API yanıtındaki hata
      } else if (err.request) {
        // Eğer istek yapılmış ama yanıt alınamamışsa
        console.log('Error request:', err.request);
      } else {
        // Genel hata mesajı
        console.log('General error:', err.message);
      }
      setError(err); // Hata state'ini güncelliyoruz
      setLoading(false); // Yükleme durumu false yapılıyor
    }
  };

  // useEffect içinde veri çekme işlemi
  useEffect(() => {
    getData('popular albums', setAlbums); // Popüler albümleri çek
    getData('Harry Styles, Shawn Mendes, Taylor Swift', setRecentAlbums); // Son eklenen albümleri çek
    getData('Ed Sheeran, Imagine Dragons, Sia, Bruno Mars', setMadeFor); // Made For albümleri çek
  }, []);

  return (
    <Albums.Provider value={{albums, recentAlbums, madeFor, error, loading}}>
      {children}
    </Albums.Provider>
  );
};

export {Albums, AlbumsProvider};
