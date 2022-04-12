import styled from 'styled-components';

export const PaperContainer = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Paper = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  border-radius: 10px;
  h1 {
    font-family: var(--Organo);
    color: var(--blue);
    text-align: center;
  }
`;
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0 auto;
  label {
    margin: 10px;
  }
  input {
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 10px;
  }
`;
export const LoginButton = styled.button`
    cursor: pointer;
  background-color: var(--orange);
  border-radius: 20px;
  border: none;
  width: 40%;
  padding: 10px;
  margin: 20px;
  h2 {
    font-family: var(--Organo);
    color: white;
  }
`;
export const LogindMedia = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */
  width: 200px;
  li {
    display: inline;
    margin: 10px 10px 10px 0;
  }
  a {
    color: var(--pink);
    font-size: 30px;
  }
`;
export const CreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  margin: 0 auto;
  span{
      text-decoration: underline ;
      color: var(--blue) ;
  }
`;
