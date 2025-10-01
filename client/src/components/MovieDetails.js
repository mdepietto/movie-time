import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { IMAGE_URL_BASE } from '../data/data';
import styled from 'styled-components'
import { StyledLink, fadeSlideUp } from './shared/StyledComponents';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  margin: 2rem auto;
  animation: ${fadeSlideUp} 0.6s ease-out;
  color: #fff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 3rem;
  letter-spacing: -0.5px;
`;

const Content = styled.div`
  display: flex;
  gap: 2rem;
`;

const Poster = styled.img`
  width: 100%;
  max-width: 20rem;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h3 {
    font-size: 2rem;
    margin: .5rem 0;
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0 0 0;
  }
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const FavoriteButton = styled.button`
  padding: .2rem .7rem .7rem .7rem;
  font-size: 3rem;
  color: #fff;
  background: linear-gradient(135deg, #ef4444, #b91c1c);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  width: fit-content;
  margin-bottom: 1rem;

  &:hover {
    background: linear-gradient(135deg, #b91c1c, #7f1d1d);
    transform: scale(1.05);
  }
`;

const MovieDetails = ({ favoriteMovies, setFavoriteMovies }) => {
  const [movieDetails, setMovieDetails] = useState();

  // id taken from the params of the frontend url in MovieCard.js
  const { movie_id: movieId } = useParams();
    
  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(`http://localhost:4040/movie/${movieId}`);

      if (!response.ok) {
        // set error message to be displayed
        setMovieDetails({ error: 'Could not access movie details, try again!' });
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

  if (movieDetails?.error) return <Title>{movieDetails.error}</Title>;

  if (!movieDetails) return <Title>Loading...</Title>;

  const {
    title,
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
      updated = [movieDetails];
      setFavoriteMovies(updated);
    }

    // set local storage to updated list
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>{title}</Title>
        <LinksWrapper>
          <StyledLink to={'/'}>Home</StyledLink>
          <StyledLink to={'/movies/favorites'}>Favorites</StyledLink>
        </LinksWrapper>
      </HeaderWrapper>

      <Content>
        <Poster
          src={`${IMAGE_URL_BASE}${posterPath}`}
          alt={`${title}-movie poster`}
        />

        <Details>
          <BasicInfo>
            <FavoriteButton onClick={toggleFavorite}>
              {favoriteMovies?.some(fav => fav.id === Number(movieId)) ? "★" : "☆"}
            </FavoriteButton>
            <h3>{rating}/10</h3>
            <h3>{runtime} minutes</h3>
            <h3>Released: {releaseDate}</h3>
            <h3>Budget: {formattedBudget}</h3>
          </BasicInfo>

          <p>{overview}</p>


        </Details>
      </Content>
    </Wrapper>
  );
};

export default MovieDetails;