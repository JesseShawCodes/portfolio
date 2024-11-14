import React from 'react';
import './landing.css';

import Whoiam from '../whoiam/whoiam';

export default function Landing(aboutMe) {
  return (
    <>
      <section className="landing">
        <section className="greeting-section">
          <span className="greeting">My name is Jesse. I am a Full Stack Developer</span>
        </section>
      </section>
      <section className="container_portfolio">
        <Whoiam content={aboutMe} />
      </section>
    </>
  );
}
