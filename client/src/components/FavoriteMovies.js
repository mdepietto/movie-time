import MovieCard from './MovieCard';
import styled from 'styled-components';
import { StyledLink, fadeSlideUp } from './shared/StyledComponents';

const Wrapper = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 2rem;
  background-color: rgba(201, 83, 103, 1);
  animation: ${fadeSlideUp} 0.6s ease-out;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 600;
  color: #ffffffff;
  letter-spacing: -0.5px;
`;

const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
`;

const FavoriteMovies = ({ favoriteMovies }) => (
  <Wrapper>
    <HeaderRow>
      <Title>Favorite Movies:</Title>
      <StyledLink to='/'>Home</StyledLink>
    </HeaderRow>
    {(!favoriteMovies || favoriteMovies?.length === 0) && <h3>No favorite movies yet!</h3>}
    
    <MoviesWrapper>
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
    </MoviesWrapper>
  </Wrapper>
);

export default FavoriteMovies;