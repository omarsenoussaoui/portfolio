import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faDocker } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C#",
    ".NET",
    "ASP.NET Core",
    "EF Core",
    "CQRS",
    "MediatR",
    "Clean Architecture",
    "Vertical Slice Architecture",
    "SignalR",
    "REST APIs",
    "FluentValidation",
    "SQL Server",
    "PostgreSQL"
];

const labelsSecond = [
    "Flutter",
    "Dart",
    "BLoC",
    "React.js",
    "Angular",
    "Blazor",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap",
    "DevExpress",
    "HTML/CSS"
];

const labelsThird = [
    "Docker",
    "Git",
    "n8n",
    "Orange Payment",
    "PayPal",
    "Firebase FCM",
    "Google/Apple Sign-In",
    "eSIM/GSM APIs",
    "Quartz.NET",
    "SonarQube",
    "SOLID",
    "Agile",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faServer} size="3x"/>
                    <h3>Backend & .NET Development</h3>
                    <p>I design and build scalable backend services with .NET and C#, applying Clean Architecture, CQRS, and vertical slice patterns to keep codebases modular and maintainable. I have strong experience with EF Core, REST API design, and relational database work.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMobileScreen} size="3x"/>
                    <h3>Mobile & Frontend Development</h3>
                    <p>I develop cross-platform mobile applications with Flutter and Dart using the BLoC pattern, and build web interfaces with React, Angular, and Blazor. I focus on delivering intuitive, responsive user experiences across devices.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Integrations</h3>
                    <p>I containerize and deploy applications with Docker, and integrate third-party services such as payment gateways, push notifications, authentication providers, and telecom APIs. I also automate workflows to support reliable production releases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
