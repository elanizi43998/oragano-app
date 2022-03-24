import React from 'react';
import { Container } from '../Container.styled';
import content from '../../content';
import HomeCard from './HomeCard';

import Locations from './Locations';

function Home() {
  return (
    <>
      <Container>

        {content.map((item, index) => (
          <HomeCard key={index} item={item} />
        ))}
         <Locations />
      </Container>
    </>
  );
}

export default Home;
