import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, LoginButton } from '../Login/Login.Styled';
import { ContactFormStyled } from './contact.styled';

function ContactForm() {
  const navigate = useNavigate();
  return (
    <ContactFormStyled>
      <h1>Contact</h1>
      <Input>
        <label htmlFor='nm'>Name :</label>
        <input type='text' id='nm' />
      </Input>
      <Input>
        <label htmlFor='email'>Email :</label>
        <input type='email' id='email' />
      </Input>
      <div>
        <label htmlFor='txt' id='lbl'>
          Message :
        </label>
        <textarea name='txt' id='txt' cols='30' rows='10'></textarea>
      </div>
      <span>
        <LoginButton type='submit' onClick={() => navigate('/')}>
          <h2>Login</h2>
        </LoginButton>
      </span>
    </ContactFormStyled>
  );
}

export default ContactForm;
