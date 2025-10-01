import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { IMAGE_URL_BASE } from '../data/data';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
`;

const MovieDetails = ({ favoriteMovies, setFavoriteMovies }) => {
  const [movieDetails, setMovieDetails] = useState();

  // id taken from the params of the frontend url in MovieCard.js
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
  };

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

  // converts to us currency layout
  const formattedBudget = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(budget);

  const toggleFavorite = () => {
    let updated;

    if (favoriteMovies) {
      // if cached favorite movie id matches this movieId
      if (favoriteMovies?.some(fav => fav.id === Number(movieId))) {
        // remove movie from list
        updated = favoriteMovies?.filter(fav => fav.id !== Number(movieId));
      } else {
        // otherwise, append it
        updated = [...favoriteMovies, movieDetails];
      }
  
      setFavoriteMovies(updated);
    } else {
      updated = [movieDetails]
    }

    // set local storage to updated list
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Wrapper>
      <Link to={'/'}>Home</Link>
      <Link to={'/movies/favorites'}>Favorites</Link>

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

      <button onClick={toggleFavorite}>
        {favoriteMovies?.some(fav => fav.id === Number(movieId)) ? "★" : "☆"}
      </button>
    </Wrapper>
  );
};

export default MovieDetails;