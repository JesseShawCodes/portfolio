/* eslint-disable */
import React from 'react';
import 'bootstrap';
import './heading.css';

import { NavLink } from 'react-router-dom';

import DarkModeToggle from '../toggle/toggle';

export default function Heading() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <section className='name'>
              <a className="navbar-brand" href="/">Jesse Shaw</a>
            </section>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/resume">Resume</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/projects">Projects</NavLink>
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
