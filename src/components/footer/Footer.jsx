import React from 'react';
import linkedinLogo from '../images/LinkedinLogo.png';
import instaLogo from '../images/InstagramLogo.svg';
const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="left-list-links">
          <li>Prompt Generator</li>
          <li>Dween Daily</li>
          <li>All Contributors</li>
          <li>Your data on Dweep.io</li>
          <li>Contribute to Dweep</li>
        </ul>
        <ul className="right-list-links">
          <li>Dweep.io</li>
          <li>Made with love in India</li>
          <li className="icon-tray">
            <img src={linkedinLogo} alt="" />
            <img src={instaLogo} alt="" />
          </li>
          <li>hello@dweep.io</li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
