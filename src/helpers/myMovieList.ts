import Cookies from 'js-cookie';
import { MovieWithGenres } from '../interfaces/movie';

interface MoviesFromCookies {
  movies: MovieWithGenres[];
  total: number;
  moviesId: number[];
}

export const inMyList = (id: number, moviesIds: number[]): boolean => {
  return moviesIds.includes(id);
};

export const checkForMoviesInCookies = (): MoviesFromCookies => {
  const cookieProducts = Cookies.get('myList')
    ? JSON.parse(Cookies.get('myList')!)
    : { movies: [], total: 0, moviesId: [] };

  return cookieProducts;
};

export const addMovieToCookies = (myMovies: MoviesFromCookies) => {
  Cookies.set('myList', JSON.stringify(myMovies));
};
