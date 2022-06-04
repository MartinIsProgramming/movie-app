import { Movie as MovieHOC } from './Movie';
import { Props as MovieProps } from './Movie';

import Image from './Image';
import Info from './Info';
import RatingAndButtons from './RatingAndButtons';

export interface MovieHocProps {
  ({ movie, children }: MovieProps): JSX.Element;
  Image: () => JSX.Element;
  Info: () => JSX.Element;
  RatingAndButtons: () => JSX.Element;
}

export const Movie: MovieHocProps = Object.assign(MovieHOC, {
  Image: Image,
  Info: Info,
  RatingAndButtons: RatingAndButtons,
});
