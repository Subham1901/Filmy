import axios from 'axios';
import { useEffect, useState } from 'react';
import { movieDetailsAPI, params } from '../utility/util';

const useSearch = id => {
  const [search, setSearch] = useState({});

  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(`${movieDetailsAPI}/${id}`, {
        params: params,
      });
      setSearch(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
    window.scrollTo(0, 0);
  }, [id]);

  return search;
};

export default useSearch;
