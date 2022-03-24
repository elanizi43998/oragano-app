import React from 'react'
import {FaInstagram, FaFacebook, FaTwitter} from 'react-icons/fa'
import { StyledMedia } from './Styles/Footer.styled'

function SocialMedia() {
  return (
    <StyledMedia>
        <h5>Social media</h5>
        <li>
        <a href='https://instagram.com'>
          <FaInstagram />
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
    </StyledMedia>
  )
}

export default SocialMedia