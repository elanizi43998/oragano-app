import styled from 'styled-components';

export const StyledContact = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  div {
    padding: 10px;
  }
`;
export const ContactFormStyled = styled.div`
  input {
    width: 30em;
  }
  label {
    margin-top: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    label {
      margin: 10px;
    }
    textarea {
      border: 1px solid lightgray;
      border-radius: 20px;
      width: 100%;
      resize: none;
      padding: 1em;
    }
  }
`;
