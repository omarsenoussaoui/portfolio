import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatar from '../assets/images/avatar.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/omarsenoussaoui" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/omar-senoussaoui-9a097a195/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Omar Senoussaoui</h1>
          <p>Full-Stack Software Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/omarsenoussaoui" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/omar-senoussaoui-9a097a195/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
