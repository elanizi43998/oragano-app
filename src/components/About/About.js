import { Zoom } from 'react-awesome-reveal';
import { Container } from '../Container.styled';
import { StyledAbout } from './About.styled';

function About() {
  return (
    <div>
      <Zoom>
        <Container>
          <StyledAbout>
            <div className='imgCont'>
              <img src='./images/Me.JPG' alt='abderrahmane-elanizi' />
            </div>

            <div className='about'>
              <h1>About Abderrahmane:</h1>
              <p>
                Passionate about web development, and eager to learn new things
                everyday.
                <br />
                Driven by my ambition, I try to push myself to new places, where
                i can find different challenges every time , I'm taking this
                learning journey as challenge to make my skills better.
                <br />
                You Want to talk ?{' '}
                <a
                  href='https://www.linkedin.com/in/abderrahmane-elanizi-ba118a19b/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Contact me{' '}
                </a>
                <br />
                GitHub repository:{' '}
                <a
                  href='https://github.com/elanizi43998/oragano-app'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Organo-app{' '}
                </a>
              </p>
            </div>
          </StyledAbout>
        </Container>
      </Zoom>
    </div>
  );
}

export default About;
