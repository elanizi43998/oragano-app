import React from 'react';

import { Paper, PaperContainer } from '../Login/Login.Styled';
import {  Slide } from 'react-awesome-reveal';
import { StyledContact } from './contact.styled';
import ContactForm from './ContactForm';
import MainLoc from './MainLoc';

function Contact() {
  return (
    <PaperContainer>
      <Paper>
        <StyledContact>
          <Slide>
            <MainLoc />
          </Slide>

          <Slide direction='right'>
            <ContactForm />
          </Slide>
        </StyledContact>
      </Paper>
    </PaperContainer>
  );
}

export default Contact;
