import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './features/movies/moviesSlice';
import pageCounterReducer from './features/counter/pageCounterSlice';
import noticePopOverReducer from './features/noticePopOver/noticePopOverSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    pageCounter: pageCounterReducer,
    noticePopOver: noticePopOverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
