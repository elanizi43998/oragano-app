import LoctionsDb from './LocationsDb';
import { StyledLocation } from './styles/Locations.styled';
import { BiCurrentLocation } from 'react-icons/bi';
import Locationcard from './Locationcard';
import { Slide } from 'react-awesome-reveal';

function Locations() {
  return (
    <StyledLocation>
      <h1>
        <BiCurrentLocation className='icon' /> Our locations
      </h1>
      <div className='card'>
        {LoctionsDb.map((item, index) => (
          <Slide direction={index % 2 === 0 ? 'right' : 'left'} duration={1500}>
            <Locationcard key={index} item={item} />
          </Slide>
        ))}
      </div>
      <h2>Give us a visit, You are always welcome</h2>
    </StyledLocation>
  );
}

export default Locations;
