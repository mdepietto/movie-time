const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(
  cors({
    // frontend url will be reading the data
    origin: ['http://localhost:3000']
  })
)

const BASE_URL = 'https://api.themoviedb.org/3'

// standard options for get request
const getOptions = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`
  }
};

// Home Route that makes trending movie api call
app.get('/trending_movies', async (req, res) => {
  // url for trending movies of the week
  const trendingMoviesUrl = `${BASE_URL}/trending/movie/week?language=en-US`
  // EXTRA TODO: add pagination -> prepend &page={num}
  // const trendingMoviesUrl = `${BASE_URL}/trending/movie/week?language=en-US&page=2`

  try {
    const response = await fetch(trendingMoviesUrl, getOptions)
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()

    res.json(data)
  }

  catch (error) {
    res.status(error);
  }
});

app.get('/movie/:movie_id', async (req, res) => {
  const { params: { movie_id: movieId } } = req

  const movieDetailsUrl = `${BASE_URL}/movie/${movieId}?language=en-US`

  try {
    const response = await fetch(movieDetailsUrl, getOptions)

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    const data = await response.json()

    res.json(data)
  }
  catch (error) {
    console.error(error)
  }
});

app.post('/favorite_movie/:movie_id', async (req, res) => {
  const { params: { movie_id: movieId } } = req;
  console.log({movieId});
  

  const favoriteMovieUrl = `${BASE_URL}/account/${process.env.ACCOUNT_ID}/favorite`;
  console.log({favoriteMovieUrl});
  

  const postOptions = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.TMDB_READ_TOKEN}`
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: movieId,
      favorite: true
    })
  };

  try {
    const response = await fetch(favoriteMovieUrl, postOptions)

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`)
    }

    res.json({ status: response.status });
  }
  catch (error) {
    console.error(error)
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});