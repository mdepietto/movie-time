import { useEffect, useState } from 'react';
import MovieCard from "./MovieCard";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin: 1rem;
  max-width: 40rem;
`;

const TrendingMovies = () => {
  const [trendingMoviesData, setTrendingMoviesData] = useState();

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch('http://localhost:4040/trending_movies')

      if (!response.ok) {
        throw new Error('Trending movies could not be fetched from the server')
      }

      const data = await response.json()
      
      setTrendingMoviesData(data)
    }
    catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTrendingMovies()
  }, [])

  if (!trendingMoviesData) return 'Loading...';

  return (
    <Wrapper>
      <Link to='/movies/favorites'>Favorite Movies</Link>
      {
        trendingMoviesData?.results?.map(({ title, id, poster_path: posterPath }) => {
          return <MovieCard key={id} title={title} id={id} posterPath={posterPath}/>
        })
      }
    </Wrapper>
  );
};

export default TrendingMovies;