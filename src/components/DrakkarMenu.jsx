import React from "react";

const Menu = () => {
  return (
    <div className="menuContainer">
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
                <span className="before">ᚨᛒᛟᚢᛏ</span>
                <span className="after">ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#school" className="linkMenu">
                <span className="before">ᛈᚱᛟᛃᛖᚲᛏᛊ</span>
                <span className="after">PROJECTS</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="linkMenu">
                <span className="before">ᛊᛟᚠᛏ ᛊᚲᛁᛚᛚᛊ</span>
                <span className="after">SOFT SKILLS</span>
              </a>
            </li>
            <li className="contact">
              <a href="#contact" className="linkMenu">
                <span className="before">ᚲᛟᚾᛏᚨᚲᛏ</span>
                <span className="after">CONTACT</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
