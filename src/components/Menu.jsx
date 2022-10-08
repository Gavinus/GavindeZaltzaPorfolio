import React from "react";

const Menu = () => {
  return (
    <div className="menuContainer" id="menu">
      <div className="containercorbeau">
        <div className="bird-container bird-container--one">
          <div className="bird bird--one" />
        </div>

        <div className="bird-container bird-container--two">
          <div className="bird bird--two" />
        </div>

        <div className="bird-container bird-container--three">
          <div className="bird bird--three" />
        </div>

        <div className="bird-container bird-container--four">
          <div className="bird bird--four" />
        </div>
      </div>

      <div className="navContainer">
        <nav>
          <ul>
            <li>
              <a href="#about" className="linkMenu">
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#project" className="linkMenu">
                <span>PROJECTS</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="linkMenu">
                <span>SOFT SKILLS</span>
              </a>
            </li>
            <li className="contact">
              <a href="#contact" className="linkMenu">
                <span>CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
