import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  font-size: 1.8rem;
  text-decoration: none;
  border: 4px solid #fff;
  border-radius: 1rem;
  padding: 1rem;
  color: #fff;
  transition: all 0.25s ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    background-color: rgba(173, 27, 51, 1);
    border-color: rgba(173, 27, 51, 1);
    transform: scale(1.05);
  }
`;

export const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;