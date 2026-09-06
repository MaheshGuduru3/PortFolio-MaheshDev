import React from 'react';
import maheshlogo from '../Assests/MaheshResize.jpg';

const AboutMe = () => (
  <section className="section about-section" id="about">
    <div className="page-wrap about-card">
      <div className="about-profile">
        <div className="profile-image-wrap"><img src={maheshlogo} alt="Mahesh Guduru" /></div>
      </div>
      <div className="about-content">
        <p className="section-kicker">ABOUT ME</p>
        <h2 className="section-title">Building products with a focus on clarity and quality.</h2>
        <p>
          I'm a Software Engineer with 2+ years of experience building reusable frontend components and responsive web applications. My core strengths are React.js, JavaScript and TypeScript, with a strong focus on maintainable UI architecture and performance.
        </p>
        <p>
          I enjoy turning product requirements into polished user experiences, solving practical engineering problems and continuously improving my frontend and full-stack skills.
        </p>
        <div className="stat-grid">
          <div><strong>2+</strong><span>Years Experience</span></div>
          <div><strong>5+</strong><span>Projects Built</span></div>
          <div><strong>10+</strong><span>Technologies</span></div>
        </div>
      </div>
      <div className="strengths">
        <div><span><i className="bi bi-code-slash"></i></span><section><h3>Clean Code</h3><p>Reusable, readable and maintainable components.</p></section></div>
        <div><span><i className="bi bi-puzzle"></i></span><section><h3>Problem Solver</h3><p>Comfortable breaking complex problems into clear solutions.</p></section></div>
        <div><span><i className="bi bi-book"></i></span><section><h3>Continuous Learner</h3><p>Always improving through projects and hands-on practice.</p></section></div>
      </div>
    </div>
  </section>
);

export default AboutMe;
