import React from 'react';
import technicalSkillsData from '../data/technicalSkillsData';
import nonTechnicalSkillsData from '../data/nonTechnicalSkillsData';

function Skills() {
  return (
    <div className="page-container">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skill-section">
          <h2>Technical Skills</h2>
          <div className="skill-grid">
            {technicalSkillsData.map((skill) => (
              <div key={skill.name} className="skill-card">
                <h3>{skill.name}</h3>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
        <div className="skill-section">
          <h2>Non-Technical Skills</h2>
          <div className="skill-grid">
            {nonTechnicalSkillsData.map((skill) => (
              <div key={skill.name} className="skill-card">
                <h3>{skill.name}</h3>
                {/* Add more details as needed */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
