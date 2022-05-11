import React from 'react';
import { Card } from './styles/Home.styled';
import {  Fade } from 'react-awesome-reveal';

function HomeCard({ item }) {
  return (
    <Card key={item.id} layout={item.id % 2 === 0 && 'row-reverse'}>
      <Fade direction={'down'} cascade>
        <img src={`./images/svg/home${item.id}.svg`} alt='graphic' />
        <div className='content'>
          <h1> {item.title}</h1>
          <p>{item.body}</p>
        </div>
      </Fade>
    </Card>
  );
}

export default HomeCard;
