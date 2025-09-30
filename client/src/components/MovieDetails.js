import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { IMAGE_URL_BASE } from '../data/data';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
`;

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();

  const { movie_id: movieId } = useParams();
    
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4040/movie/${movieId}`)

      if (!response.ok) {
        throw new Error('Movie details could not be fetched from the server');
      }

      const data = await response.json();

      setMovieDetails(data);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMovieDetails()
    // disabled because only want it to call once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!movieDetails) return 'Loading...';

  const {
    title,
    tagline,
    vote_average: rating,
    runtime = 0,
    release_date: releaseDate,
    poster_path: posterPath,
    budget,
    overview,
  } = movieDetails;

  const formattedBudget = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(budget);

  return (
    <Wrapper>
      <Link to={'/'}>Back to Home</Link>
      <h3>{title}</h3>
      <h4>{tagline}</h4>
      <h3>{rating}/10</h3>
      <p>{runtime} minutes</p>
      <h4>Released: {releaseDate}</h4>
      <img
        src={`${IMAGE_URL_BASE}${posterPath}`}
        alt={`${title}-movie poster`}
      />
      <p>Budget: {formattedBudget}</p>
      <p>{overview}</p>
    </Wrapper>
  );
};

// PORT=4040

// TMDB_API_KEY=8b0b2419f50dffe3f8ebcb585261be45

// TMDB_READ_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjBiMjQxOWY1MGRmZmUzZjhlYmNiNTg1MjYxYmU0NSIsIm5iZiI6MTc1OTAxMzU4Ni4xMjYwMDAyLCJzdWIiOiI2OGQ4NmFkMjZjYjA5YWVmYTAzOGI4MmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IJDHbz5Eg_to8rkkxZX0UWh4R5H3qBQrP-k5uefp_a0

export default MovieDetails;