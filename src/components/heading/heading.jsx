/* eslint-disable no-confusing-arrow */
import React from 'react';
import 'bootstrap';
import './heading.css';

import { NavLink } from 'react-router-dom';

import DarkModeToggle from '../toggle/toggle';

export default function Heading() {
  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-content-between mb-2 navbar navbar-expand-lg">
          <div className="container-fluid">
            <section className="name">
              <a href="/" className="name-text-link navbar-brand">Jesse Shaw</a>
            </section>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="links nav navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/">Home</NavLink></li>
                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/resume">Resume</NavLink></li>
                <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/projects">Projects</NavLink></li>
                <li className="nav-item"><DarkModeToggle /></li>
              </ul>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
          </div>

        </nav>
      </div>
    </header>
  );
}
