import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
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

const TrendingMovies = ({ favoriteMovies }) => {
  const [trendingMoviesData, setTrendingMoviesData] = useState();

  const fetchTrendingMovies = async () => {
    const cached = localStorage.getItem('trendingMovies');
    
    // if cache exists, use that value
    if (cached) {
      setTrendingMoviesData(JSON.parse(cached));
    // otherwise, fetch
    } else {
      try {
        const response = await fetch('http://localhost:4040/trending_movies');
  
        if (!response.ok) {
          // set error message to be displayed
          setTrendingMoviesData({ error: 'Could not access trending movies, try again!' });
          throw new Error('CLIENT: Trending movies could not be fetched')
        };
  
        const data = await response.json();
        
        setTrendingMoviesData(data);

        localStorage.setItem("trendingMovies", JSON.stringify(data));
      }
      catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchTrendingMovies()
  }, []);

  if (trendingMoviesData?.error) return <Title>{trendingMoviesData.error}</Title>;

  if (!trendingMoviesData?.results) return <Title>Loading...</Title>;

  return (
    <Wrapper>
      <HeaderRow>
        <Title>Trending Movies This Week:</Title>
        <StyledLink to='/movies/favorites'>Favorite Movies</StyledLink>
      </HeaderRow>

      <MoviesWrapper>
        {
          trendingMoviesData?.results?.map(({ title, id, poster_path: posterPath }) => (
            <MovieCard
              key={id}
              title={title}
              id={id}
              favorite={favoriteMovies?.some(fav => fav.id === id)}
              posterPath={posterPath}
            />
          ))
        }
      </MoviesWrapper>
    </Wrapper>
  );
};

export default TrendingMovies;