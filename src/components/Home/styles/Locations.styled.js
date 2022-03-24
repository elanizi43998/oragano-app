import styled from 'styled-components';

export const StyledLocation = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: var(--orange);
  .icon {
    color: var(--blue);
    font-size: 30px;
  }
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    font-family: var(--Organo);
    color: #fff;
    text-align: center;
  }
  div {
    display: flex;
    justify-content:space-around ;
  }
`;
export const StyledCard = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: white;
  height: 340px ;
  width: 240px;
  transition: all .2s ease-in-out;
  div {
    width: 200px;
    height: 200px;
  }
  img {
    width: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
  h1 {
    color: var(--blue);
  }
  .icon{
      color: var(--pink) ;
  }
  &:hover{
      transform: scale(1.05) ;
  }
`;
