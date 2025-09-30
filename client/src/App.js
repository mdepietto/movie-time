import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrendingMovies from './components/TrendingMovies';
import MovieDetails from './components/MovieDetails';
import FavoriteMovies from './components/FavoriteMovies';

const TRENDING_MOVIES_ENDPOINT = 'trending_movies';

function App() {
  const [trendingMoviesData, setTrendingMoviesData] = useState();

  const fetchTrendingMovies = async () => {
    try {
      const response = await fetch(`http://localhost:4040/${TRENDING_MOVIES_ENDPOINT}`)

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

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          // when visiting the homepage, redirected to a more descriptive url
          element={<Navigate to={TRENDING_MOVIES_ENDPOINT} replace />}
        />
        <Route
          path={`/${TRENDING_MOVIES_ENDPOINT}`}
          element={<TrendingMovies trendingMoviesData={trendingMoviesData} />}
        />
        <Route
          path='/movie/:movie_id'
          element={<MovieDetails />}
        />
        <Route
          path='/movies/favorites'
          element={<FavoriteMovies />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
