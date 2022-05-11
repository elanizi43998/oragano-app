import styled from 'styled-components';

export const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  max-width: 100%;
  div {
    padding: 10px;
  }
  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ContactFormStyled = styled.div`
  /* @media (max-width: 760px) {
    background-color: green;
  } */

  div {
    display: flex;
    flex-direction: column;
    #lbl {
      margin-bottom: 10px;
    }
    textarea {
      border: 1px solid lightgray;
      border-radius: 20px;
      width: 300px;
      height: 120px;
      resize: none;
      padding: 1em;
      max-width: 96%;
    }
  }
  button {
    width: 70%;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
