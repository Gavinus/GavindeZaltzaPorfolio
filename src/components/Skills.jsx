import React from "react";

const Skills = () => {
  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsContainer__skills">
        <h1>SOFT SKILLS</h1>
        <div className="skillsContainer__skills__softSkillContainer">
          <ul>
            <li>- Adaptabilité</li>
            <li>- Dynamique</li>
            <li>- Motivé et déterminé</li>
            <li>- Autodidacte</li>
            <li>- Travail d'équipe</li>
            <li>- Passion pour le code</li>
          </ul>
        </div>
      </div>

      <div className="skillsContainer__middleBarre"/>

      <div className="skillsContainer__logoContainer">
        <div className="skillsContainer__logoContainer__logoContainerOne">
          <h2>LANGUAGES</h2>
          <p>
            <img
              src="https://skillicons.dev/icons?i=react,js,typescript,nodejs,express,mysql,html,css,sass,tailwind&theme=dark&perline=4"
              alt="iconeLanguage"
            />
          </p>
        </div>

        <div className="skillsContainer__logoContainer__logoContainerTwo">
          <h2>TOOLS</h2>
          <p>
            <img
              src="https://skillicons.dev/icons?i=vscode,visualstudio,figma,github,discord,linkedin&theme=dark&perline=4"
              alt="iconeTool"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
