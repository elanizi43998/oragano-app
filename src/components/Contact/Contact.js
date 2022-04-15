import React from 'react';

import { Paper, PaperContainer } from '../Index/Login.Styled';
import { StyledContact } from './contact.styled';
import ContactForm from './ContactForm';
import MainLoc from './MainLoc';

function Contact() {
  return (
    <PaperContainer>
      <Paper>
        <StyledContact>
          <MainLoc/>
          <ContactForm />
        </StyledContact>
      </Paper>
    </PaperContainer>
  );
}

export default Contact;
