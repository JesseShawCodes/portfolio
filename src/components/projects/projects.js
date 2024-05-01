import { NavLink } from "react-router-dom";
import Portfolio from "../portfolio/portfolio";

import data from "../../data/data.json"

export default function ProjectsPage() {
    return (
        <>
        <div>
            <h1>Projects</h1>
        <p>
            My time is currently being taken up by my Full Time job at Jacobs. But I do wanna make sure I'm putting in extra time to keep up on new tools and work on some of my own projects to stay sharp.
        </p>
        <p>
            One passion project I am working on right now is a music rating application built using React and Flask. The Git Repository for that project can be found here.
        </p>
        <p>
            If you would like to keep up with all of the other work I'm doing outside of my work at Jacob's, please check out my <NavLink target="_blank" to="https://github.com/jesseshawcodes">GitHub Repository</NavLink>.
        </p>
        </div>
        </>
    )
}
