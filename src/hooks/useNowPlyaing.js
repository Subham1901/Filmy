import axios from 'axios';
import { useState, useEffect } from 'react';

const useNowPlaying = URL => {
  const [data, setMovieData] = useState({});
  const getNowPlayingData = async () => {
    try {
      const { data } = await axios.get(URL);
      setMovieData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNowPlayingData();
  }, []);

  return data;
};

export default useNowPlaying;
