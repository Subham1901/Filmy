import axios from 'axios';
import { useState, useEffect } from 'react';
import { tredingAPI } from '../utility/util';
const useCarousel = () => {
  const [images, setImages] = useState([]);
  const getCarouselImages = async () => {
    try {
      const { data } = await axios.get(tredingAPI);
      const result = data?.results;
      const imageLinks = result.map(data => {
        return { title: data?.title, id: data?.id, image: data?.backdrop_path };
      });
      setImages(imageLinks);
    } catch (error) {}
  };
  useEffect(() => {
    getCarouselImages();
  }, []);

  return images;
};

export default useCarousel;
