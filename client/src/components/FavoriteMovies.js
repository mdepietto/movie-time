import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
  max-width: 40rem;
`;

const FavoriteMovies = ({ favoriteMovies }) => {
  return (
    <Wrapper>
      <Link to='/'>Home</Link>
      {
        favoriteMovies?.map(({ title, id, poster_path: posterPath }) => {
          return (
            <MovieCard
              key={id}
              title={title}
              id={id}
              posterPath={posterPath}
              favorite
            />
          )
        })
      }
    </Wrapper>
  );
};

export default FavoriteMovies;