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
  div {
    width: 320px;

    input {
      width: 300px;
    }
    label {
      margin-top: 0;
    }
  }

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
