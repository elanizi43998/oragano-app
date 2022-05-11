import React from 'react';
import { LocaStyled } from './Localistion.styled';

function MainLoc() {
  return (
    <LocaStyled>
      <h1>Our Main Office</h1>
      <div>
        <a
          href='https://www.google.com/maps/@25.1916859,55.2753289,309m/data=!3m1!1e3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src='./images/cities/localisation.png' alt='' />
        </a>
      </div>
      <p>
        Sheikh Mohammed bin Rashid Blvd - Downtown Dubai - Dubai - United Arab
        Emirates
      </p>
    </LocaStyled>
  );
}

export default MainLoc;
