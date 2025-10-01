import MovieCard from './MovieCard';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
  max-width: 50rem;
`;

const FavoriteMovies = ({ favoriteMovies }) => (
  <Wrapper>
    <Link to='/'>Home</Link>
    {favoriteMovies.length === 0 && <h3>No favorite movies yet!</h3>}
    
    {/* create a movie card for each favorite movie */}
    {
      favoriteMovies?.map(({ title, id, poster_path: posterPath }) => (
        <MovieCard
          key={id}
          title={title}
          id={id}
          posterPath={posterPath}
          favorite
        />
      ))
    }
  </Wrapper>
);

export default FavoriteMovies;