import React from "react";

const Skills = () => {
  return (
    <div className="SkillsContainer" id="skills">
      <div className="containerSkill1">
        <h1>SOFT SKILLS</h1>
        <div className="softskillContainer">
          <li>User understanding</li>
          <li>Adaptability</li>
          <li>Dynamic</li>
          <li>Self-taught</li>
          <li>Passion for coding</li>
        </div>
      </div>
      <div className="skillContainer">
        <div className="skillContainerOne">
          <h2>LANGUAGES</h2>
          <p>
            <img src="https://skillicons.dev/icons?i=react,js,typescript,nodejs,express,mysql,html,css,sass,tailwind&theme=dark&perline=4" />
          </p>
        </div>  
        
        <div className="skillContainerTwo">
          <h2>TOOLS</h2>
          <p>
            <img src="https://skillicons.dev/icons?i=vscode,visualstudio,figma,github,discord,linkedin&theme=dark&perline=4" />
          </p>
          </div>
          </div>
    </div>
  );
};

export default Skills;
