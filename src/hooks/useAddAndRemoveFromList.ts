import { addToMyList, removeFromMyList } from '../features/movies/moviesSlice';
import { closePopOver, openPopOver } from '../features/noticePopOver/noticePopOverSlice';
import { MovieWithGenres } from '../interfaces/movie';
import { useAppDispatch } from './redux';

interface Props {
  movie: MovieWithGenres;
  movieId: number;
}

export const useAddAndRemoveFromList = ({ movie, movieId }: Props) => {
  const dispatch = useAppDispatch();

  const handleAddToList = () => {
    dispatch(addToMyList(movie));
    dispatch(openPopOver({ isAdding: true }));
    setTimeout(() => dispatch(closePopOver()), 1500);
  };

  const handleRemoveFromList = () => {
    dispatch(removeFromMyList(movieId));
    dispatch(openPopOver({ isAdding: false }));
    setTimeout(() => dispatch(closePopOver()), 1500);
  };

  return {
    handleAddToList,
    handleRemoveFromList,
  };
};
