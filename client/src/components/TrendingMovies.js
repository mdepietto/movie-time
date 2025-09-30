import MovieCard from "./MovieCard";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
  max-width: 40rem;
`;

const TrendingMovies = ({ trendingMoviesData }) => {
  if (!trendingMoviesData) return 'Loading...';

  return (
    <Wrapper>
      {
        trendingMoviesData?.results?.map(({ title, id, poster_path: posterPath }) => {
          return <MovieCard key={id} title={title} id={id} posterPath={posterPath}/>
        })
      }
    </Wrapper>
  );
};

export default TrendingMovies;