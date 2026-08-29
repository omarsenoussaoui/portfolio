import React, { useState } from "react";
import pharmamoov01 from '../assets/images/projects/pharmamoov-01.png';
import pharmamoov03 from '../assets/images/projects/pharmamoov-03.png';
import pharmamoov04 from '../assets/images/projects/pharmamoov-04.png';
import pharmamoov05 from '../assets/images/projects/pharmamoov-05.png';
import pharmamoov06 from '../assets/images/projects/pharmamoov-06.png';
import pharmamoov07 from '../assets/images/projects/pharmamoov-07.png';
import pharmamoov08 from '../assets/images/projects/pharmamoov-08.png';
import pharmamoov09 from '../assets/images/projects/pharmamoov-09.png';
import pharmamoov10 from '../assets/images/projects/pharmamoov-10.png';
import fastinfix01 from '../assets/images/projects/fastinfix-01.png';
import fastinfix02 from '../assets/images/projects/fastinfix-02.png';
import fastinfix03 from '../assets/images/projects/fastinfix-03.png';
import fastinfix04 from '../assets/images/projects/fastinfix-04.png';
import fastinfix05 from '../assets/images/projects/fastinfix-05.png';
import fastinfix06 from '../assets/images/projects/fastinfix-06.png';
import fastinfix07 from '../assets/images/projects/fastinfix-07.png';
import fastinfix08 from '../assets/images/projects/fastinfix-08.png';
import fastinfix09 from '../assets/images/projects/fastinfix-09.png';
import fastinfix10 from '../assets/images/projects/fastinfix-10.png';
import fastinfix11 from '../assets/images/projects/fastinfix-11.png';
import fastinfix12 from '../assets/images/projects/fastinfix-12.png';
import darelkhotba01 from '../assets/images/projects/darelkhotba-01.png';
import darelkhotba02 from '../assets/images/projects/darelkhotba-02.png';
import darelkhotba03 from '../assets/images/projects/darelkhotba-03.png';
import darelkhotba04 from '../assets/images/projects/darelkhotba-04.png';
import darelkhotba05 from '../assets/images/projects/darelkhotba-05.png';
import darelkhotba06 from '../assets/images/projects/darelkhotba-06.png';
import darelkhotba07 from '../assets/images/projects/darelkhotba-07.png';
import darelkhotba08 from '../assets/images/projects/darelkhotba-08.png';
import darelkhotba09 from '../assets/images/projects/darelkhotba-09.png';
import noon01 from '../assets/images/projects/noon-01.png';
import noon02 from '../assets/images/projects/noon-02.png';
import noon03 from '../assets/images/projects/noon-03.png';
import noon04 from '../assets/images/projects/noon-04.png';
import noon05 from '../assets/images/projects/noon-05.png';
import noon06 from '../assets/images/projects/noon-06.png';
import noon07 from '../assets/images/projects/noon-07.png';
import noon08 from '../assets/images/projects/noon-08.png';
import noon09 from '../assets/images/projects/noon-09.png';
import noon10 from '../assets/images/projects/noon-10.png';
import noon11 from '../assets/images/projects/noon-11.png';
import noon12 from '../assets/images/projects/noon-12.png';
import noon13 from '../assets/images/projects/noon-13.png';
import noon14 from '../assets/images/projects/noon-14.png';
import kabas01 from '../assets/images/projects/kabas-01.png';
import kabas02 from '../assets/images/projects/kabas-02.png';
import kabas03 from '../assets/images/projects/kabas-03.png';
import kabas04 from '../assets/images/projects/kabas-04.png';
import kabas05 from '../assets/images/projects/kabas-05.png';
import kabas06 from '../assets/images/projects/kabas-06.png';
import kabas07 from '../assets/images/projects/kabas-07.png';
import kabas08 from '../assets/images/projects/kabas-08.png';
import kabas09 from '../assets/images/projects/kabas-09.png';
import Lightbox from './Lightbox';
import '../assets/styles/Project.scss';

interface ProjectItem {
    title: string;
    subtitle?: string;
    description: string;
    images: string[];
}

const projects: ProjectItem[] = [
    {
        title: 'PharmaMoov',
        subtitle: 'Online Pharmacy & Prescription Delivery Platform',
        description: 'A multi-tenant marketplace connecting patients with local pharmacies for medication ordering, prescription upload, and home delivery or click-and-collect. Built as three ASP.NET Core applications sharing a REST API — a customer storefront, an admin back-office, and a JWT-secured API also serving the mobile apps — covering the full order lifecycle across a 10,000-product catalogue: browsing, cart and checkout, prescription handling, courier dispatch with geolocation tracking, and marketplace payments with automated commission splits to pharmacies. Stack: ASP.NET Core 3.1 (C#), Entity Framework Core, MySQL, ASP.NET MVC/Razor with Bootstrap and jQuery, MangoPay and Stripe for payments, Firebase Cloud Messaging, Google Maps, and Docker.',
        images: [pharmamoov01, pharmamoov03, pharmamoov04, pharmamoov05, pharmamoov06, pharmamoov07, pharmamoov08, pharmamoov09, pharmamoov10]
    },
    {
        title: 'Fast In Fix',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: [fastinfix01, fastinfix02, fastinfix03, fastinfix04, fastinfix05, fastinfix06, fastinfix07, fastinfix08, fastinfix09, fastinfix10, fastinfix11, fastinfix12]
    },
    {
        title: 'Dar El Khotba',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: [darelkhotba01, darelkhotba02, darelkhotba03, darelkhotba04, darelkhotba05, darelkhotba06, darelkhotba07, darelkhotba08, darelkhotba09]
    },
    {
        title: 'Noon',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: [noon01, noon02, noon03, noon04, noon05, noon06, noon07, noon08, noon09, noon10, noon11, noon12, noon13, noon14]
    },
    {
        title: 'KABAS Forms',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        images: [kabas01, kabas02, kabas03, kabas04, kabas05, kabas06, kabas07, kabas08, kabas09]
    }
];

function Project() {

    const [activeProject, setActiveProject] = useState<number | null>(null);
    const [activeImage, setActiveImage] = useState<number>(0);

    const openProject = (index: number) => {
        setActiveProject(index);
        setActiveImage(0);
    };

    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div className="project" key={project.title}>
                    <button className="project-thumb" onClick={() => openProject(index)}>
                        <img src={project.images[0]} className="zoom" alt="thumbnail" width="100%"/>
                    </button>
                    <h2 onClick={() => openProject(index)}>{project.title}</h2>
                    {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
        {activeProject !== null && (
            <Lightbox
                title={projects[activeProject].title}
                images={projects[activeProject].images}
                index={activeImage}
                onClose={() => setActiveProject(null)}
                onNavigate={setActiveImage}
            />
        )}
    </div>
    );
}

export default Project;
