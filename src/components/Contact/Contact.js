import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  LoginButton,
  Paper,
  PaperContainer,
} from '../Index/Login.Styled';
import { ContactFormStyled, StyledContact } from './contact.styled';

function Contact() {
  const navigate = useNavigate();
  return (
    <PaperContainer>
      <Paper>
        <StyledContact>
          <h1>Hello</h1>
          <ContactFormStyled>
            <h1>Contact</h1>
            <Input>
              <label htmlFor='email'>Email :</label>
              <input type='email' />
            </Input>
            <Input>
              <label htmlFor='pwd'>Password :</label>
              <input type='password' />
            </Input>
            <div>
                <label htmlFor="txt">Message</label>
                <textarea name="txt" id="txt" cols="30" rows="10"></textarea>
            </div>
            <LoginButton type='submit' onClick={() => navigate('/')}>
              <h2>Login</h2>
            </LoginButton>
          </ContactFormStyled>
        </StyledContact>
      </Paper>
    </PaperContainer>
  );
}

export default Contact;
