import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';

export default function Landing(props) {
  return (
      <>
      <h1>
        Resume
      </h1>
      <button className='download_button'>
      Download CSV <FontAwesomeIcon icon={faDownload} />
      </button>
      <div>
        {
          props.content.map((item) => 
            <section>
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
      </>
  );
}
