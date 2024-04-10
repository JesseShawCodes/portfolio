import React from 'react';
import './heading.css';

import { NavLink } from 'react-router-dom';

export default function Heading(props) {
    return (
        <header>
        <div className="container">
            <section className="name">
                <a href="/" className="name-text-link"><h1 className="name-text" >Jesse Shaw</h1></a>
            </section>
            <nav>
            <ul className="links nav">
                <li className='nav-item'><NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')} to='/resume'>Resume</NavLink></li>
                <li className='nav-item'><NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link inactive')} to='/projects'>Projects</NavLink></li>
            </ul>
            </nav>                

        </div>
        </header>
    );
}
