import styled from 'styled-components';

export const LocaStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    img {
      width: 100%;
      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
      transition: 0.5s ease-in-out;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  p {
    text-align: center;
    font-size: 20px;
  }
`;
