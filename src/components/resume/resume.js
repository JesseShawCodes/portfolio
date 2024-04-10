import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';

import resume from '../../data/JesseShaw_Resume.pdf'
export default function Landing(props) {
  return (
      <div className='container'>
      <h1>
        Resume
      </h1>
      <a href={resume} download="JesseShaw_Resume" target='_blank' rel="noreferrer">
        <button className='download_button'>
          Download CV <FontAwesomeIcon icon={faDownload} />
        </button>
      </a>
      <div style={{maxWidth: '700px', margin: '0px auto'}}>
        {
          props.content.map((item) => 
            <section className="card my-2 p-3">
              <h2>{item.company}</h2>


              <h3>{item.title}</h3>
              <h4>{item.start_date} - {item.end_date ? item.end_date : "Present" }</h4>

              <div>
                <ul>
                {item.bullet_points.map((val) =>
                  <li>{val}</li>
                )}
                </ul>
              </div>
            </section>
          )
        }
      </div>
      </div>
  );
}
