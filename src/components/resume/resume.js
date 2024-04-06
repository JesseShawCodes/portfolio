import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Landing(props) {
  console.log(props)
  return (
      <>
      <h1>
        Resume
      </h1>
      <div>
        {
          props.content.map((item) => 
            <section>
              <h2>{item.company}</h2>
              <h3>{item.title}</h3>
            </section>
          )
        }
      </div>
      </>
  );
}
