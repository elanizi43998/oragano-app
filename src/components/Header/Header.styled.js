import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  background-color: #9adcff;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  max-width: 100%;
  fill: #fff89a;
`;

export const StyledLink = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;

  a {
    font-family: var(--Organo);
    font-weight: 700;
    font-size: 1.5em;
    text-decoration: none;
    color: var(--yellow);
  }
`;
export const StyledButton = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-weight: 700;
  background-color: #fff ;
  transition: all .2s ease-in-out;
  font-family: var(--Organo);
  color: var(--orange);
  padding: 8px 30px;
  &:hover{
    transform: scale(1.02) ;
  }
`;
