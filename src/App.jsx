import React from 'react';
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
  return (
    <BrowserRouter>
      <main className="container p-0">
        <Heading />
        <div className="d-flex flex-column h-100">
          <Routes>
            <Route path="/" element={<Landing content={data.about_me} />} />
            <Route path="/resume" element={<ResumePage resumeContent={data.resume} />} />
            <Route path="/projects" element={<ProjectsPage about={data.projects_page} />} />
          </Routes>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}
