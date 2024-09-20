import { React, useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import myPicture from '../../images/IMG_2233.JPG';

export default function Whoiam() {
  const [state, setState] = useState({ description: null });

  useEffect(() => {
    fetch(process.env.REACT_APP_DRUPAL_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        setState({ ...state, description: data.data[0].attributes.body.value });
      });
  }, []);

  const aboutMe = DOMPurify.sanitize(state.description, { USE_PROFILES: { html: false } });

  return (
    <section className="about-me" id="bio">
      <section className="image">
        <img src={myPicture} alt="Jesse Shaw in a suit" className="my-picture" title="Me on my wedding day in December 2021" />
      </section>
      <section className="description aboutme-description">
        {aboutMe}
      </section>
    </section>
  );
}
