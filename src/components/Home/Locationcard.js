import React from 'react';
import { StyledCard } from './styles/Locations.styled';
import {MdLocationOn} from 'react-icons/md'


function Locationcard({ item }) {
  return (
    <StyledCard>
      <div>
        <img src={item.image} alt='city' />
      </div>
      <h1>  <MdLocationOn className='icon'/>{item.city} </h1>
      <p>{item.Address}</p>
    </StyledCard>
  );
}

export default Locationcard;
