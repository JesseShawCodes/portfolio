import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub, faXTwitter, faInstagram, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="footer d-flex flex-wrap flex-column justify-content-between align-items-center py-3 flex-shrink-0" id="footer">
      <h2 className="text-center text-lg-start">Say Hi</h2>
      <hr className="light" />
      <section className="footer-nav">
        <ul className="d-flex flex-wrap">
          <li><a href="mailto:jesseshawcodes@gmail.com" aria-label="email" target="_blank" rel="noopener noreferrer" title="Send me an email at JesseShawCodes@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          <li><a href="https://github.com/jesseshawcodes" aria-label="GitHub" target="_blank" rel="noopener noreferrer" title="Connect with me on GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.instagram.com/jesseshawcodes/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://twitter.com/JesseShawCodes" aria-label="Twitter/X" target="_blank" rel="noopener noreferrer" title="Say Hi on Twitter!"><FontAwesomeIcon icon={faXTwitter} /></a></li>
          <li><a href="https://www.linkedin.com/in/itsjesseshaw/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li><a href="tel:410-703-6125" aria-label="telephone" title="Send me a message at 410-703-6125"><FontAwesomeIcon icon={faPhone} /></a></li>
        </ul>
      </section>
    </footer>
  );
}
