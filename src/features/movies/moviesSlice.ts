import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovieWithGenres } from '../../interfaces/movie';

interface MoviesState {
  myMovies: {
    movies: MovieWithGenres[];
    total: number;
    moviesId: number[];
  };
}

const initialState: MoviesState = {
  myMovies: {
    movies: [],
    total: 0,
    moviesId: [],
  },
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    seMyListFromCookies: (
      state,
      action: PayloadAction<{ movies: MovieWithGenres[]; total: number; moviesId: number[] }>
    ) => {
      state.myMovies.movies = action.payload.movies;
      state.myMovies.total = action.payload.total;
      state.myMovies.moviesId = action.payload.moviesId;
    },

    addToMyList: (state, action: PayloadAction<MovieWithGenres>) => {
      state.myMovies.movies.push(action.payload);
      state.myMovies.moviesId.push(action.payload.id);
      state.myMovies.total += 1;
    },

    removeFromMyList: (state, action: PayloadAction<number>) => {
      state.myMovies.movies = state.myMovies.movies.filter(movie => movie.id !== action.payload);
      state.myMovies.moviesId = state.myMovies.moviesId.filter(id => id !== action.payload);
      state.myMovies.total -= 1;
    },
  },
});

export const { addToMyList, seMyListFromCookies, removeFromMyList } = moviesSlice.actions;

export default moviesSlice.reducer;
