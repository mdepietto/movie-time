import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrendingMovies from './components/TrendingMovies';
import MovieDetails from './components/MovieDetails';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState();

  useEffect(() => {
    const saved = localStorage.getItem('favorites');

    console.log({ saved });
    
    if (saved) {
      setFavoriteMovies(JSON.parse(saved));
    }
  }, []);

  console.log(favoriteMovies);
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          // when visiting the homepage, redirected to a more descriptive url
          element={<Navigate to='/trending_movies' replace />}
        />
        <Route
          path='/trending_movies'
          // TODO: pass 'favoriteMovies' here to display icon
          element={<TrendingMovies />}
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
}

export default App;
