import { FC } from 'react';
import { StarIcon as FullStar } from '@heroicons/react/solid';
import { StarIcon as EmptyStar } from '@heroicons/react/outline';
import { getRatingStars } from '../helpers/getRatingStars';

interface Props {
  voteAverage?: number;
  className?: string;
  fullStarStyle: string;
  emptyStarStyle: string;
  onClick?: () => void;
}

export const Rating: FC<Props> = ({
  voteAverage = 0,
  className,
  fullStarStyle,
  emptyStarStyle,
  onClick,
}) => {
  const fullStarsArr = getRatingStars(voteAverage);

  return (
    <div className={className}>
      {fullStarsArr.map((el, i) =>
        el === 1 ? (
          <FullStar key={i} className={`text-[#FFB800] ${fullStarStyle}`} onClick={onClick} />
        ) : (
          <EmptyStar key={i} className={emptyStarStyle} onClick={onClick} />
        )
      )}
    </div>
  );
};
