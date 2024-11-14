import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee as fassFaCoffee } from '@fortawesome/free-solid-svg-icons';

import Heading from './components/heading/heading';
import Landing from './components/landing/landing';
import Footer from './components/footer/footer';
import './App.scss';

import data from './data/data.json';

import ResumePage from './components/resume/resume';
import ProjectsPage from './components/projects/projects';

library.add(fassFaCoffee);

export default function App() {
  const [jsonData, setJsonData] = useState([]);
  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Heading />
        <Routes>
          <Route path="/" element={<Landing content={jsonData.about_me} />} />
          <Route path="/resume" element={<ResumePage resumeContent={jsonData.resume} />} />
          <Route path="/projects" element={<ProjectsPage about={data.projects_page} />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
