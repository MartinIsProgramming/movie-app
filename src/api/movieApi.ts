import { baseApi } from './baseApi';
import {
  Genres,
  GenresResponse,
  MoviesResponse,
  MovieWithGenres,
  SearchMovieResponse,
} from '../interfaces/movie';
import { moviesResponse } from '../helpers';

const BANNER_MOVIE_URL = '/movie';
const DISCOVER_MOVIE_URL = '/discover/movie';
const GENRES_URL = '/genre/movie/list';
const SEARCH_URL = '/search/movie';
const TOP_RATED_URL = '/movie/top_rated';

interface SearchMoviesProps {
  searchTerm: string;
  pageNumber: number;
}

// --------- MOVIE GENRES
export const fetchGenres = async (): Promise<Genres[]> => {
  const { data } = await baseApi.get<GenresResponse>(
    `${GENRES_URL}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );

  return data.genres;
};

// --------- MOVIES RESPONSE
export const fetchDiscoverMovies = async (pageNumber: number = 1): Promise<MoviesResponse> => {
  const { data } = await baseApi.get<MoviesResponse>(
    `${DISCOVER_MOVIE_URL}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&page=${pageNumber}`
  );

  const { page, results, total_pages, total_results } = data;

  return { page, results, total_pages, total_results };
};

export const fetchSearchMovies = async ({
  searchTerm,
  pageNumber = 1,
}: SearchMoviesProps): Promise<MoviesResponse> => {
  const { data } = await baseApi.get<MoviesResponse>(
    `${SEARCH_URL}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&query=${searchTerm}&page=${pageNumber}`
  );
  const { page, results, total_pages, total_results } = data;

  return { page, results, total_pages, total_results };
};

export const fetchSimilarMovies = async (movieId?: number): Promise<MoviesResponse> => {
  const { data } = await baseApi.get<MoviesResponse>(
    `movie/${movieId}/similar?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );

  const { page, results, total_pages, total_results } = data;

  return { page, results, total_pages, total_results };
};

export const getTopRatedMovies = async (): Promise<MoviesResponse> => {
  const { data } = await baseApi.get<MoviesResponse>(
    `${TOP_RATED_URL}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );

  const { page, results, total_pages, total_results } = data;

  return { page, results, total_pages, total_results };
};

export const fetchBanner = async (movieId?: number): Promise<MovieWithGenres> => {
  const { data } = await baseApi.get<MovieWithGenres>(
    `${BANNER_MOVIE_URL}/${movieId}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
  );

  return data;
};

// MOVIES RESPONSE WITH GENRES DESCRIPTION
export const fetchDiscoverMoviesWithGenre = async (
  pageNumber: number
): Promise<MovieWithGenres[]> => {
  const promises: [Promise<Genres[]>, Promise<MoviesResponse>] = [
    fetchGenres(),
    fetchDiscoverMovies(pageNumber),
  ];

  const { moviesWithGenres } = await moviesResponse.generateMoviesWithGenres({
    genres: promises[0],
    movies: promises[1],
  });

  return moviesWithGenres;
};

export const fetchSearchMoviesWithGenres = async ({
  searchTerm,
  pageNumber = 1,
}: SearchMoviesProps): Promise<SearchMovieResponse> => {
  const promises: [Promise<Genres[]>, Promise<MoviesResponse>] = [
    fetchGenres(),
    fetchSearchMovies({ searchTerm, pageNumber }),
  ];

  const { moviesWithGenres, moviesRes } = await moviesResponse.generateMoviesWithGenres({
    genres: promises[0],
    movies: promises[1],
  });

  return { ...moviesRes, results: moviesWithGenres };
};

export const fetchSimilarMoviesWithGenre = async (movieId?: number): Promise<MovieWithGenres[]> => {
  const promises: [Promise<Genres[]>, Promise<MoviesResponse>] = [
    fetchGenres(),
    fetchSimilarMovies(movieId),
  ];

  const { moviesWithGenres } = await moviesResponse.generateMoviesWithGenres({
    genres: promises[0],
    movies: promises[1],
  });

  return moviesWithGenres;
};

export const getTopRatedMoviesWithGenres = async (): Promise<MovieWithGenres[]> => {
  const promises: [Promise<Genres[]>, Promise<MoviesResponse>] = [
    fetchGenres(),
    getTopRatedMovies(),
  ];

  const { moviesWithGenres } = await moviesResponse.generateMoviesWithGenres({
    genres: promises[0],
    movies: promises[1],
  });

  return moviesWithGenres;
};
