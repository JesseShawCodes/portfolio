/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */

import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.css';

import resumePdf from '../../data/JesseShaw_Resume.pdf';
// import ResumeSection from './resumeSection';

export default function Resume(resume) {
  const { resumeContent } = resume;

  return (
    <div className="container">
      <h1>
        Resume
      </h1>
      <a href={resumePdf} download="JesseShaw_Resume" target="_blank" rel="noreferrer">
        <button className="download_button" type="button">
          Download CV
          <FontAwesomeIcon icon={faDownload} />
        </button>
      </a>
      <div style={{ maxWidth: '700px', margin: '0px auto' }}>
      </div>
    </div>
  );
}

Resume.protoTypes = {
  resumeContent: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
  })).isRequired,
};
