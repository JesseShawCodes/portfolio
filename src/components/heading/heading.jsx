/* eslint-disable no-confusing-arrow */

import React from 'react';
import './heading.css';

import { NavLink } from 'react-router-dom';

import DarkModeToggle from '../toggle/toggle';

export default function Heading() {
  return (
    <header>
      <div className="container">
        <section className="name">
          <a href="/" className="name-text-link"><h1 className="name-text">Jesse Shaw</h1></a>
        </section>
        <nav className="d-flex justify-content-between mb-2">
          <ul className="links nav">
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/resume">Resume</NavLink></li>
            <li className="nav-item"><NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link inactive'} to="/projects">Projects</NavLink></li>
          </ul>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  );
}
