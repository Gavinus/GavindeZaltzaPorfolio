import React from "react";

const Menu = () => {
  return (
    <div className="menuContainer" id="menu">
      <div className="menuContainer__containercorbeau">
        <div className="menuContainer__containercorbeau__bird-container menuContainer__containercorbeau__bird-container--one">
          <div className="menuContainer__containercorbeau__bird-container__bird menuContainer__containercorbeau__bird-container__bird--one" />
        </div>

        <div className="menuContainer__containercorbeau__bird-container menuContainer__containercorbeau__bird-container--two">
          <div className="menuContainer__containercorbeau__bird-container__bird menuContainer__containercorbeau__bird-container__bird--two" />
        </div>

        <div className="menuContainer__containercorbeau__bird-container menuContainer__containercorbeau__bird-container--three">
          <div className="menuContainer__containercorbeau__bird-container__bird menuContainer__containercorbeau__bird-container__bird--three" />
        </div>

        <div className="menuContainer__containercorbeau__bird-container menuContainer__containercorbeau__bird-container--four">
          <div className="menuContainer__containercorbeau__bird-container__bird menuContainer__containercorbeau__bird-container__bird--four" />
        </div>
      </div>

      <div className="menuContainer__navContainer">
        <nav>
          <ul>
            <li>
              <a href="#about">
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#skills">
                <span>SOFT SKILLS</span>
              </a>
            </li>
            <li>
              <a href="#project">
                <span>PROJECTS</span>
              </a>
            </li>
            <li>
              <a href="#contact">
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
