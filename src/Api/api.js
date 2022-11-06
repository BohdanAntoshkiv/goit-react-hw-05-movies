// API ключ (v3 auth)
// fa56f77e329575fa8f7cf874a4b361b4
// Приклад API-запиту
// https://api.themoviedb.org/3/movie/550?api_key=fa56f77e329575fa8f7cf874a4b361b4

import axios from 'axios';

const api_key = 'fa56f77e329575fa8f7cf874a4b361b4';
const baseURL = 'https://api.themoviedb.org/3/';

const instance = axios.create({
  baseURL,
  params: { api_key },
});

export const getTrending = async () => {
  const { data } = await instance.get('trending/movie/week');
  return data.results;
};

export const searchMovie = async query => {
  const { data } = await instance.get('search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`movie/${id}`);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await instance.get(`movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await instance.get(`movie/${id}/reviews`);
  return data.results;
};
