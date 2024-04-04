import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Landing(props) {
  console.log(props)
  return (
      <>
      <div>
        This is the Resume Page
      </div>
      <div>
        {
          props.content.map((item) => 
            <section>
              {item.company}
            </section>
          )
        }
      </div>
      </>
  );
}
