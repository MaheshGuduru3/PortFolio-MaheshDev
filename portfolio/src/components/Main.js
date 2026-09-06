import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import codingPerson from '../Assests/codingUpdate-removebg-preview (1).png';

const Main = () => (
  <section className="hero section" id="home">
    <div className="page-wrap hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Hi, there <span>👋</span></p>
        <h1>I'm Mahesh Guduru</h1>
        <h2><span></span>{' '}<Typewriter
          words={['Software Engineer','Frontend Developer','React.js Developer','JavaScript Developer', 'UI Engineer', 'MERN Stack Developer']}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={45}
          delaySpeed={1500}
        /></h2>
        <p className="hero-description">
          Software Engineer focused on building fast, responsive and scalable web applications with React, JavaScript and TypeScript.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#projects">View My Work <i className="bi bi-arrow-right"></i></a>
          <a className="secondary-button" href={process.env.REACT_APP_RESUME_URL || '#contact'} target={process.env.REACT_APP_RESUME_URL ? '_blank' : undefined} rel="noreferrer">
            Download Resume <i className="bi bi-download"></i>
          </a>
        </div>
        <div className="social-row" aria-label="Social links">
          <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bi bi-github"></i></a>
          <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          <a href="mailto:maheshguduru30@gmail.com" aria-label="Email"><i className="bi bi-envelope"></i></a>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="hero-orb"></div>
        <div className="dot-grid"></div>
        <img src={codingPerson} alt="" className="hero-image" />
      </div>
    </div>
  </section>
);

export default Main;
