import React from "react";
import pharmamoov from '../assets/images/pharmamoov.png';
import fastinfix from '../assets/images/fastinfix.png';
import darelkhotba from '../assets/images/darelkhotba.png';
import noon from '../assets/images/noon.png';
import kabas from '../assets/images/kabas.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={pharmamoov} className="zoom" alt="thumbnail" width="100%"/>
                <h2>PharmaMoov</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className="project">
                <img src={fastinfix} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Fast In Fix</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className="project">
                <img src={darelkhotba} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Dar El Khotba</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className="project">
                <img src={noon} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Noon</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div className="project">
                <img src={kabas} className="zoom" alt="thumbnail" width="100%"/>
                <h2>KABAS Forms</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
