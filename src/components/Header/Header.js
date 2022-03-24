import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container.styled';
import { Logo, StyledHeader, StyledNav, StyledLink, StyledButton } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <Logo src='./images/svg/logo.svg' alt='' />
          <StyledLink>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <StyledButton>Try it now</StyledButton>
          </StyledLink>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default Header;
