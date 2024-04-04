/*
            {
                data.projects.map((project) => (
                <Portfolio
                    key={project.id}
                    screenshot={smuScreenshot} 
                    logo={smu_logo}
                    projectname="jacobs-engineering"
                    sitename={project.sitename}
                    description={project.description} 
                    technologies="html"
                    applink={project.applink}
                />
                ))
            }
*/

import data from '../../data/data.json'
import Portfolio from '../portfolio/portfolio';
import smuScreenshot from '../../images/smu_screenshot.png'
import smu_logo from '../../images/smu_logo.png'

const ProjectsPage = () =>
(
    <div className="container app-container">
    <h1>This is the Projects Page</h1>
    <div>
        <p>
            My time is currently being taken up by my Full Time job at Jacobs. But I do wanna make sure I'm putting in extra time to keep up on new tools and work on some of my own projects to stay sharp.
        </p>
    </div>
    {
                data.projects.map((project) => (
                <Portfolio
                    key={project.id}
                    screenshot={smuScreenshot} 
                    logo={smu_logo}
                    projectname="jacobs-engineering"
                    sitename={project.sitename}
                    description={project.description} 
                    technologies="html"
                    applink={project.applink}
                />
                ))
            }    </div>
)


export default ProjectsPage;