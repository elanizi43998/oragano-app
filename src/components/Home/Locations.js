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
     <h2>Give us a visit, You are always welcome</h2>
    </StyledLocation>

  );
}

export default Locations;
