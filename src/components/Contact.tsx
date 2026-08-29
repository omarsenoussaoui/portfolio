import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

const contacts = [
  {
    icon: <EmailIcon />,
    label: 'Email',
    value: 'omarsen6@gmail.com',
    href: 'mailto:omarsen6@gmail.com'
  },
  {
    icon: <WhatsAppIcon />,
    label: 'WhatsApp',
    value: '+213 793 75 13 77',
    href: 'https://wa.me/213793751377'
  },
  {
    icon: <PhoneIcon />,
    label: 'Phone',
    value: '+213 793 75 13 77',
    href: 'tel:+213793751377'
  },
  {
    icon: <LinkedInIcon />,
    label: 'LinkedIn',
    value: 'omar-senoussaoui',
    href: 'https://www.linkedin.com/in/omar-senoussaoui-9a097a195/'
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'omarsenoussaoui',
    href: 'https://github.com/omarsenoussaoui'
  }
];

function Contact() {

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="contact-grid">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                className="contact-card"
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                <span className="contact-icon">{contact.icon}</span>
                <span className="contact-text">
                  <span className="contact-label">{contact.label}</span>
                  <span className="contact-value">{contact.value}</span>
                </span>
              </a>
            ))}
          </div>

          <div className="contact-cv">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href={`${process.env.PUBLIC_URL}/assets/Omar_Senoussaoui_CV.pdf`}
              download="Omar_Senoussaoui_CV.pdf"
            >
              Download My CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
