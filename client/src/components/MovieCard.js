import { IMAGE_URL_BASE } from '../data/data';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-radius: 8px;
  padding: 1rem;
  background-color: rgba(173, 27, 51, 1);
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: all 0.25s ease-in-out;
  position: relative;

  &:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  }

  & > img {
    width: 100%;
    border-radius: 8px;
  }

  & > h3 {
    font-size: 1.5rem;
    color: #fff;
    margin: 0.75rem 1rem 0 1rem;
  }

  & > span {
    color: gold;
    font-size: 4rem;
    position: absolute;
    top: .5rem;
    right: 1.7rem;
  }
`

const MovieCard = ({ title, id, posterPath, favorite }) => (
  <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
    <Wrapper>
      <img
        src={`${IMAGE_URL_BASE}${posterPath}`}
        alt={`${title}-movie poster`}
      />
      <h3>{title}</h3>
      
      {/* favorite indicator */}
      { favorite && <span>★</span> }
    </Wrapper>
  </Link>
);

export default MovieCard;