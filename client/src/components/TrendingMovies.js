import React from 'react';

// test to see info
const TrendingMovies = ({ trendingMoviesData }) => {
  if (!trendingMoviesData) return 'Loading...';

  console.log(trendingMoviesData)

  return (
    <div>
      hello
    </div>
  );
};

export default TrendingMovies;