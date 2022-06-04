import { createContext } from 'react';
import { MovieWithGenres } from '../interfaces/movie';

interface MovieContextProps {
  movie: MovieWithGenres;
  isMovieDetailsPage?: boolean;
}

export const MovieContext = createContext({} as MovieContextProps);
export const { Provider } = MovieContext;
