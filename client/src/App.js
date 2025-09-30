import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TrendingMovies from './components/TrendingMovies';
import MovieDetails from './components/MovieDetails';
import FavoriteMovies from './components/FavoriteMovies';

function App() {
  console.log(localStorage)

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
          element={<TrendingMovies />}
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
