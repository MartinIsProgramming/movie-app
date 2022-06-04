import _ from 'lodash';

export const getRatingStars = (voteAverage: number) => {
  let fullStarsArr = [0, 0, 0, 0, 0];

  const ratingMap = [
    _.inRange(voteAverage, 0, 2),
    _.inRange(voteAverage, 2, 4),
    _.inRange(voteAverage, 4, 6),
    _.inRange(voteAverage, 6, 8),
    _.inRange(voteAverage, 8, 10),
  ];

  for (let i = 0; i < ratingMap.length; i++) {
    const fullStars = _.indexOf(ratingMap, true) + 1;
    fullStarsArr.fill(1, 0, fullStars);
  }

  return fullStarsArr;
};
