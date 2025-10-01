import { IMAGE_URL_BASE } from '../data/data';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);

  & > img {
    width: 100%;
  }

  & > h3 {
    font-size: 1rem;
    font-weight: bold;
  }
`

// TODO: add hover and click animations
const MovieCard = ({ title, id, posterPath, favorite }) => {
  return (
    <Link to={`/movie/${id}`}>
      <Wrapper>
        <img
          src={`${IMAGE_URL_BASE}${posterPath}`}
          alt={`${title}-movie poster`}
        />
        <h3>{title}</h3>
        { favorite && <span>★</span> }
      </Wrapper>
    </Link>
  );
};

export default MovieCard;