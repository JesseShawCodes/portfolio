import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
/*Font Awesome */
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faXTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer(props) {
    return (
        // Footer Component
        <footer className="footer" id="footer">
            <h2 className="say-hi">Say Hi</h2>
            <hr className="light"></hr>
            <section className="footer-nav">
            <ul>
                <li><a href="mailto:jesseshawcodes@gmail.com" target="_blank" rel="noopener noreferrer" title="Send me an email at JesseShawCodes@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li><a href="https://github.com/jesseshawcodes" target="_blank" rel="noopener noreferrer" title="Connect with me on GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.instagram.com/jesseshawcodes/" target="_blank" rel="noopener noreferrer" title="Follow me on Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://twitter.com/JesseShawCodes" target="_blank" rel="noopener noreferrer" title="Say Hi on Twitter!"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                <li><a href="https://www.linkedin.com/in/thejesseshaw/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="tel:410-703-6125" title="Send me a message at 410-703-6125"><FontAwesomeIcon icon={faPhone} /></a></li>
            </ul>
            </section>
        </footer>
    );
}
