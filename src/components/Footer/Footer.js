import React from 'react';
import { Container } from '../Container.styled';
import { Logo, StyledHeader } from '../Header/Header.styled';
import SocialMedia from './SocialMedia';
import { Banner, StyledFooter } from './Styles/Footer.styled';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <StyledHeader>
      <Container>
        <StyledFooter>
          <Logo src='./images/svg/logoPink.svg' alt='' />
          <div>
            <h5>Information</h5>
            <ul>
              <li>Plans &amp; Pricing</li>
              <li>About us</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h5>Information</h5>
            <ul>
              <li>Plans &amp; Pricing</li>
              <li>About us</li>
              <li>Jobs</li>
            </ul>
          </div>
          <SocialMedia />
        </StyledFooter>
      </Container>
      <Banner>
        <p>
          Copyrights &copy; 2022,{' '}
          <a href='https://www.linkedin.com/in/abderrahmane-elanizi-ba118a19b/'>
            NIZI
          </a>
          . All rights reserved.{' '}
        </p>
      </Banner>
    </StyledHeader>
  );
}

export default Footer;
