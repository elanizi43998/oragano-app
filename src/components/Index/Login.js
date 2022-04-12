import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  CreateAccount,
  Input,
  LoginButton,
  LogindMedia,
  Paper,
  PaperContainer,
} from './Login.Styled';

function Login() {
  let navigate = useNavigate();
  return (
    <PaperContainer>
      <Paper>
        <h1>Login</h1>
        <Input>
          <label htmlFor='email'>Email :</label>
          <input type='email' />
        </Input>
        <Input>
          <label htmlFor='pwd'>Password :</label>
          <input type='password' />
        </Input>
        <LoginButton type='submit' onClick={() => navigate('/')}>
          <h2>Login</h2>
        </LoginButton>
        <LogindMedia>
          <li>
            <a href='https://instagram.com'>
              <FaGoogle />
            </a>
          </li>
          <li>
            <a href='https://facebook.com'>
              <FaFacebook />
            </a>
          </li>

          <li>
            <a href='https://twitter.com'>
              <FaTwitter />
            </a>
          </li>
        </LogindMedia>
        <CreateAccount>
          <p>You don't have an account yet ?</p>
          <span>Create Account</span>
        </CreateAccount>
      </Paper>
    </PaperContainer>
  );
}

export default Login;
