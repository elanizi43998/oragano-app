import React from 'react';
import LoctionsDb from './LocationsDb';
import { StyledLocation } from './styles/Locations.styled';
import { BiCurrentLocation } from 'react-icons/bi';
import Locationcard from './Locationcard';

function Locations() {
  return (
    <StyledLocation>
      <h1>
        <BiCurrentLocation className='icon' /> Our locations
      </h1>
     <div>
         {
             LoctionsDb.map((item, index)=>(
                <Locationcard key={index} item={item}/>
             ))
         }
     </div>
    </StyledLocation>

  );
}

export default Locations;
