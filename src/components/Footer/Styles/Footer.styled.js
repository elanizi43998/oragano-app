import styled from 'styled-components';

export const StyledFooter = styled.footer`
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  padding: 40px;
  color: #fff;
  ul {
    list-style-type: none;
  }
  h5 {
    font-family: var(--Organo);
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const StyledMedia = styled.div`
  li {
    display: inline;
    margin: 10px 10px 10px 0;
  }
  a {
    color: var(--pink);
    font-size: 30px;
  }
`;
export const Banner = styled.div`
  background-color: var(--pink);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  & > p {
    color: #fff;
    text-align: center;
  }
  a {
    color: var(--blue);
  }
`;
