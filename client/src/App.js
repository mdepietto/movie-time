import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrendingMovies from './components/TrendingMovies';
import MovieDetails from './components/MovieDetails';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState();

  // sets favoriteMovies to cached values
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    
    if (saved) {
      setFavoriteMovies(JSON.parse(saved));
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          // when visiting the homepage, redirected to a more descriptive url (/trending_movies)
          element={<Navigate to='/trending_movies' replace />}
        />
        <Route
          path='/trending_movies'
          // passed favoriteMovies to update icons on movie cards
          element={<TrendingMovies favoriteMovies={favoriteMovies}  />}
        />
        <Route
          path='/movie/:movie_id'
          element={<MovieDetails favoriteMovies={favoriteMovies} setFavoriteMovies={setFavoriteMovies} />}
        />
        <Route
          path='/movies/favorites'
          element={<FavoriteMovies favoriteMovies={favoriteMovies} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
