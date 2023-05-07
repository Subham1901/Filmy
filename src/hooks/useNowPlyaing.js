import axios from 'axios';
import { useState, useEffect } from 'react';
import { nowPlayingAPI } from '../utility/util';
const useNowPlaying = () => {
  const [data, setNowPlaying] = useState({});
  const getNowPlayingData = async () => {
    try {
      const { data } = await axios.get(nowPlayingAPI);
      setNowPlaying(data);
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
