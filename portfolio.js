import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'project1.jpg', appLink: 'https://project1.com', repoLink: 'https://github.com/yourusername/project1' },
    { title: 'Project 2', image: 'project2.jpg', appLink: 'https://project2.com', repoLink: 'https://github.com/yourusername/project2' },
    
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.appLink} target="_blank" rel="noopener noreferrer">View App</a>
            <a href={project.repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
