import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    filmy: {
      bg: '#151728',
      text: '#E2DFD2',
      heading: '#FAF9F6',
      gray: '#D3D3D3',
      yellow: '#FDDA0D',
    },
  },
});

var months = [
  { num: '01', form: 'Jan' },
  { num: '02', form: 'Feb' },
  { num: '03', form: 'Mar' },
  { num: '04', form: 'Apr' },
  { num: '05', form: 'May' },
  { num: '06', form: 'June' },
  { num: '07', form: 'July' },
  { num: '08', form: 'Aug' },
  { num: '09', form: 'Sept' },
  { num: '10', form: 'Oct' },
  { num: '11', form: 'Nov' },
  { num: '12', form: 'Dec' },
];

export const backdropImagePath = 'https://image.tmdb.org/t/p/original/';
export const tredingAPI =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=7f3b56995772caf3c4ab77353b47e57b&page=1';
export const nowPlayingAPI =
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=7f3b56995772caf3c4ab77353b47e57b';
export const posterImagePath =
  'https://www.themoviedb.org/t/p/w220_and_h330_face';
export const topRatedAPI =
  'https://api.themoviedb.org/3/movie/top_rated?api_key=7f3b56995772caf3c4ab77353b47e57b&language=en-US&page=1';
export const popularAPI =
  'https://api.themoviedb.org/3/movie/popular?api_key=7f3b56995772caf3c4ab77353b47e57b&language=en-US&page=1';

export const movieDetailsAPI = 'https://api.themoviedb.org/3/movie/';

export const params = {
  api_key: '7f3b56995772caf3c4ab77353b47e57b',
  language: 'en-US',
  append_to_response: 'credits',
};

export const formatDate = date => {
  const val = date.split('-');
  const month = months.filter(data => data?.num === val[1]);
  return `${val[2]} ${month[0]} ${val[0]}`;
};
