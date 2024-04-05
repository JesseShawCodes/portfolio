import React from 'react';
import Heading from './components/heading/heading'
import Landing from './components/landing/landing'
// import Portfolio from './components/portfolio/portfolio'
// import Whoiam from './components/whoiam/whoiam'
import Footer from './components/footer/footer'
import './App.css'

/* Portfolio Items*/
/*
import squaresLogo from './images/Logo3.jpg'
import mumuLogo from './images/logo.png'
import stegatoLogo from './images/stegatto_logo2.png'
import ybd_logo from './images/ybd_logo.png'
import smu_logo from './images/smu_logo.png'
*/

/*Portfolio Screenshots */
/*
import smuScreenshot from './images/smu_screenshot.png';
import squaresScreenshot from './images/squares_screenshot.jpg';
import stegatoScreenshot from './images/stegato_screenshot.jpg';
import mumuScreenshot from './images/mumu_screenshot.jpg';
import yogaByDebScreenshot from './images/yogabydeborah_2.png';
*/
/* Portfolio Data */

import data from "./data/data.json"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ResumePage from './components/resume/resume';
import ProjectsPage from './components/projects/projects';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee as fassFaCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fassFaCoffee)

export default function App(props) {

    // console.log(data)
    return (
    <BrowserRouter>
        <main>
            <Heading />
                <Routes>
                    <Route path="/" element={<Landing content={data} />} />
                    <Route path="/resume" element={<ResumePage content={data.resume}  />} />
                    <Route path="/projects" element={<ProjectsPage content={data}  />} />
                </Routes>

            <Footer />
        </main>
    </BrowserRouter>
    );
}

/*
                <Portfolio
                    site="1" 
                    screenshot={smuScreenshot} 
                    logo={smu_logo}
                    projectname="jacobs-engineering"
                    sitename="Jacobs Engineering" 
                    description="Since October 2018, I have been working as the in house web developer at South Moon Under in Annapolis, MD. As the web developer, I am a member of an Ecom/Marketing team that includes very talented designers, SEO Specialists, and digital strategists who work to make the site what it is. My roles and responsibilities on the team include, but are not limited to the following:" 
                    technologies="html"
                    applink="https://www.dcita.edu/"
                />
                <Portfolio 
                    site="2" 
                    screenshot={smuScreenshot} 
                    logo={smu_logo}
                    projectname="south-moon-under"
                    sitename="South Moon Under" 
                    description="From October 2018 through February 2020, I worked as the in house web developer at South Moon Under in Annapolis, MD. As the web developer, I was a member of an Ecomerce/Marketing team that includes very talented designers, SEO Specialists, and digital strategists. My roles and responsibilities on the team include, but are not limited to the following:" 
                    technologies="html"
                    applink="https://www.southmoonunder.com/"
                />
                <Portfolio 
                    site="3" 
                    screenshot={yogaByDebScreenshot} 
                    logo={ybd_logo}
                    projectname="yoga-by-deborah"
                    sitename="Yoga By Deborah"
                    description="Deborah Dorbet is a Yoga instructor based out of Lakeland, Florida. Her home site linked below was built using Wordpress. The site was customized using a child theme based on the Fluida theme. Deborah and myself are currently working on adding an Ecommerce section to the site as well as a subscription based Yoga instruction service." 
                    applink="https://yogabydeborah.com/" 
                    repolink="https://github.com/JesseShawCodes/stegato"
                />
                <Portfolio 
                    site="4" 
                    screenshot={stegatoScreenshot} 
                    logo={stegatoLogo} 
                    projectname="stegato" 
                    sitename="Stegato"
                    description="My inspiration for Stegato started from IMDB's top 250. I created a project that users can rate their favorite (and least favorite) albums and those ratings across the application are collected in the Stegato leaderboard. When I first built this project, I was using the iTunes API to search for music. As of December 2019, due to an update to iTunes API, I am currently testing other API's to use in place of the iTunes API" 
                    technologies="html" 
                    applink="http://stegato.netlify.com/" 
                    repolink="https://github.com/JesseShawCodes/stegato"
                />
                <Portfolio
                    sitename="Squares"
                    site="5" screenshot={squaresScreenshot} logo={squaresLogo} projectname="squares" description="As someone who has worked on project teams in the past, I understand the value of having a go to place to keep all online resources. I created Squares to fill that need." technologies="icons go here" applink="https://squaresapp.herokuapp.com/" repolink="https://github.com/JesseShawCodes/squares"/>
                <Portfolio 
                    sitename="Mumu"
                    site="6" screenshot={mumuScreenshot} logo={mumuLogo} projectname="mumu" description="Mumu is my first application. I have been a music lover for most of my life. Mumu is an application that users can use to search for the top 3 albums (based on last.fm statistics) of any artist, and listen to that music on YouTube." technologies="icons go here" applink="https://JesseShawCodes.github.io/mumu/" repolink="https://github.com/JesseShawCodes/mumu"/>

*/