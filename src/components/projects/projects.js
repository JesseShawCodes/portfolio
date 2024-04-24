import { NavLink } from "react-router-dom";
import Portfolio from "../portfolio/portfolio"

const ProjectsPage = () =>
(
    <div className="container app-container">
    <h1>This is the Projects Page</h1>
    <div>
        <p>
            My time is currently being taken up by my Full Time job at Jacobs. But I do wanna make sure I'm putting in extra time to keep up on new tools and work on some of my own projects to stay sharp.
        </p>
        <p>If you would like to keep up with all of the other work I'm doing outside of my work at Jacob's, please check out my <NavLink target="_blank" to="https://github.com/jesseshawcodes">GitHub Repository</NavLink>.</p>
    </div>
    <section>
        <Portfolio />
    </section>
    </div>
)


export default ProjectsPage;