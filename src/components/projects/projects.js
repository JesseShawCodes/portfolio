import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
import Project from "./project";

export default function ProjectsPage(props) {

    const [repositories, setRepositories] = useState([])

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const octokit = new Octokit({
        auth: process.env.REACT_APP_GH, 
    })

    useEffect(() => {
        (async () => {
          try {
            setIsLoading(true);
            const { data } = await octokit.request('GET /users/JesseShawCodes/repos', {
                username: 'JesseShawCodes',
                sort: "updated",
                direction: "desc",
                per_page: 20,
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28'
                }
        })
            setRepositories(data);
          } catch (error) {
            setIsError({
                error: true,
                message: error
            });
          } finally {
            setIsLoading(false);
          }
        })();
    }, []);
    
    
    if (isLoading) {
        return "Loading..."
    }
    return (
        <>
        <div className="container">
            <h1>Projects</h1>
        <p>
            My time is currently being taken up by my Full Time job at Jacobs. But I do wanna make sure I'm putting in extra time to keep up on new tools and work on some of my own projects to stay sharp.
        </p>
        <p>
            One passion project I am working on right now is a music rating application built using React and Flask. The Git Repository for that project can be found <NavLink target="_blank" to="https://github.com/JesseShawCodes/Music_March_Maddness">here</NavLink>.
        </p>
        <p>
            If you would like to keep up with all of the other work I'm doing outside of my work at Jacob's, please check out my <NavLink target="_blank" to="https://github.com/jesseshawcodes">GitHub Repository</NavLink>.
        </p>
        <h2>GitHub Repos</h2>
        <div style={{maxWidth: '1200px', margin: '0px auto'}}>
            {
                <div className="repos_grid">
                    {
                isError ? 
                <div>
                    <p>
                    {isError.message.message}
                    </p>
                </div> : 
                repositories.map((item) => 
                   
                    <Project repo={item} />
                )
            }
                </div>
            }
        </div>
        </div>
        </>
    )
}
