import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();

  const { movie_id: movieId } = useParams();

  console.log(movieId);
  
    
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
  }, []);

  return (
    <div>
      <Link to={'/'}>Back to Home</Link>
      {JSON.stringify(movieDetails)}
    </div>
  );
};

export default MovieDetails;