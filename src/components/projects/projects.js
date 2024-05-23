import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Octokit } from "@octokit/core";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
            console.log(data)
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

    var masonryBreakPoints = {350: 1, 750: 2, 900: 3, 1200: 3}

    if (isError || isLoading) {
        masonryBreakPoints = {}
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
                <ResponsiveMasonry columnsCountBreakPoints={masonryBreakPoints}>
                    <Masonry>
                    {
                isError ? 
                <div>
                    <p>
                    {isError.message.message}
                    </p>
                </div> : 
                repositories.map((item) => 
                   
                    <section className="card my-2 mx-3 p-3"  key={item.id}>
                        <h3>{item.name}</h3>
                        <NavLink target="_blank" to={item.html_url}>Repo</NavLink>
                        <p>Updated At: {item.updated_at}</p>
                        {
                            item.language ? <p>Language: {item.language}</p> : null
                        }
                        {
                            item.description ? <p>{item.description}</p> : null
                        }
                        {
                            item.topics.length ? 
                            <div>
                                <p>Technologies Used: </p>
                                <ul>
                                    {
                                        item.topics.map((topic) => 
                                            <li key={topic}>{topic}</li>
                                        )}
                                </ul></div> : null
                        }
                    </section>
                )
            }
                    </Masonry>
                </ResponsiveMasonry>
            }
        </div>
        </div>
        </>
    )
}
