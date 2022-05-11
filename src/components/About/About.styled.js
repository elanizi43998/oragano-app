import styled from 'styled-components';

export const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin: 20px 0px;
  .imgCont {
    width: 200px;
    max-width: 100%;
    img {
      width: 100%;
      border-radius: 42px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    }
  }
  .about {
    padding: 20px;
  }
  p {
    margin: 20px 0;
  }
  a {
    color: var(--blue);
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
