import React, { useState } from "react";

import ecommerce from "../Assests/Ecommerce.png";
import cart from "../Assests/EcommerceCart1.png";
import frontend from "../Assests/frontendMentor.png";
import youtubeimg from "../Assests/youtube.png";
import admins from "../Assests/admin.png";

const projects = [
  {
    no: "01",
    title: "MERN E-Commerce Platform",
    category: "Full Stack",
    image: ecommerce,
    description:
      "Full-stack e-commerce application with authentication, search, pagination, cart, wishlist, order management and Razorpay integration.",
    stack: ["React", "Node.js", "MongoDB", "Express", "Razorpay"],
    live: "REACT_APP_PROJECT_LIVE_LINK_URL4",
    repo: "REACT_APP_PROJECT_REPO_LINK_URL4",
  },
  {
    no: "02",
    title: "E-Commerce Cart",
    category: "Frontend",
    image: cart,
    description:
      "Responsive React application with Redux-based state management, filtering, search and pagination for a seamless shopping experience.",
    stack: ["React", "Redux Toolkit", "JavaScript", "Bootstrap"],
    live: "REACT_APP_PROJECT_LIVE_LINK_URL2",
    repo: "REACT_APP_PROJECT_REPO_LINK_URL2",
  },
  {
    no: "03",
    title: "Product Landing Page",
    category: "Frontend",
    image: frontend,
    description:
      "Responsive landing page built from a design brief with strong attention to layout, interaction and cross-device behavior.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "REACT_APP_PROJECT_LIVE_LINK_URL1",
    repo: "REACT_APP_PROJECT_REPO_LINK_URL1",
  },
  {
    no: "04",
    title: "YouTube Clone",
    category: "Full Stack",
    image: youtubeimg,
    description:
      "Video platform clone featuring authentication, search, channel views and external YouTube API integration.",
    stack: ["React", "Firebase", "Node.js", "API"],
    live: "REACT_APP_PROJECT_LIVE_LINK_URL3",
    repo: "REACT_APP_PROJECT_REPO_LINK_URL3",
  },
  {
    no: "05",
    title: "Admin Dashboard",
    category: "Frontend",
    image: admins,
    description:
      "CRUD dashboard with search, pagination, bulk actions and multi-user selection workflows.",
    stack: ["React", "JavaScript", "CRUD"],
    live: "REACT_APP_PROJECT_LIVE_LINK_URL5",
    repo: "REACT_APP_PROJECT_REPO_LINK_URL5",
  },
];

const filters = ["All Projects", "Full Stack", "Frontend"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* HEADER */}
        <div className="projects-header">

          <div className="projects-heading">

            <span className="projects-kicker">
              <span className="kicker-dot"></span>
              SELECTED WORK
            </span>

            <h2>
              Projects that
              <br />
              demonstrate how
              <br />
              I <span>build.</span>
            </h2>

          </div>

          <div className="projects-header-right">

            <p>
              A collection of full-stack and frontend projects
              solving real-world problems with modern technologies.
            </p>

            {/* FILTERS */}
            <div className="project-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter
                      ? "filter-btn active"
                      : "filter-btn"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">

          {filteredProjects.map((project) => (

            <article
              className="modern-project-card"
              key={project.no}
            >

              {/* IMAGE */}
              <div className="project-preview">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <span>View Project</span>
                  <i className="bi bi-arrow-up-right"></i>
                </div>

              </div>

              {/* CONTENT */}
              <div className="modern-project-content">

                {/* NUMBER + TITLE */}
                <div className="project-title-row">

                  <span className="project-number">
                    {project.no}
                  </span>

                  <h3>{project.title}</h3>

                </div>

                {/* DESCRIPTION */}
                <p className="modern-project-description">
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}
                <div className="modern-project-tags">

                  {project.stack.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                {/* ACTIONS */}
                <div className="modern-project-actions">

                  <a
                    href={process.env[project.live]}
                    target="_blank"
                    rel="noreferrer"
                    className="modern-live-link"
                  >
                    <i className="bi bi-box-arrow-up-right"></i>
                    Live Demo
                  </a>

                  <a
                    href={process.env[project.repo]}
                    target="_blank"
                    rel="noreferrer"
                    className="modern-source-link"
                  >
                    Source Code
                    <i className="bi bi-github"></i>
                  </a>

                  <a
                    href={process.env[project.live]}
                    target="_blank"
                    rel="noreferrer"
                    className="project-arrow"
                    aria-label={`Open ${project.title}`}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="projects-cta">

          <div className="cta-icon">
            <i className="bi bi-stars"></i>
          </div>

          <div className="cta-content">
            <h3>Interested in working together?</h3>
            <p>Let's build something great.</p>
          </div>

          <a href="#contact" className="cta-button">
            Get In Touch
            <i className="bi bi-arrow-right"></i>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;