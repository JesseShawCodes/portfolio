import React from 'react';
import Heading from './components/heading/heading'
import Landing from './components/landing/landing'
import Footer from './components/footer/footer'
import './App.scss'

import data from "./data/data.json"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ResumePage from './components/resume/resume';
import ProjectsPage from './components/projects/projects';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee as fassFaCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fassFaCoffee)

export default function App(props) {

    return (
    <BrowserRouter>
        <main>
            <Heading />
                <Routes>
                    <Route path="/" element={<Landing content={data} />} />
                    <Route path="/resume" element={<ResumePage content={data.resume}  />} />
                    <Route path="/projects" element={<ProjectsPage content={data.featured_projects}  />} />
                </Routes>

            <Footer />
        </main>
    </BrowserRouter>
    );
}
