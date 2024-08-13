import React from 'react';

function Resume() {
  const proficiencies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'];

  return (
    <section>
      <h2>Resume</h2>
      <a href="path-to-your-resume.pdf" download>Download My Resume</a>
      <h3>Proficiencies</h3>
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Resume;
