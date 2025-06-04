/* eslint-disable import/no-unresolved */

import {
  React,
  useState,
  useEffect,
} from 'react';
import { Octokit } from 'octokit';

import Repo from './repo';

export default function ProjectsPage(aboutContent) {
  const { about } = aboutContent;
  const [repositories, setRepositories] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const octokit = new Octokit({
    auth: process.env.REACT_APP_GH,
  });

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await octokit.request('GET /users/JesseShawCodes/repos', {
          username: 'JesseShawCodes',
          sort: 'updated',
          direction: 'desc',
          per_page: 20,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        });
        setRepositories(data);
      } catch (error) {
        setIsError({
          error: true,
          message: error,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return 'Loading...';
  }
  console.log(about.content);

  return (
    <div className="container">
      <h1>Projects</h1>

      <div dangerouslySetInnerHTML={{ __html: about.content }} />

      <h2>GitHub Repos</h2>
      <div style={{ maxWidth: '1200px', margin: '0px auto' }}>
        <div>
          {
            isError
              ? (
                <div>
                  <p>
                    {isError.message.message}
                  </p>
                </div>
              )
              : (
                repositories.map(
                  (repository) => <Repo repo={repository} key={crypto.randomUUID()} />,
                )
              )
          }
        </div>
      </div>
    </div>
  );
}
