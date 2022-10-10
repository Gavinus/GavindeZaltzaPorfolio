import React, { useState } from "react";
import About from "./About";
import Menu from "./Menu";
import Project from "./Project";
import Skills from "./Skills";
import Form from "./Form";
import { dataLogin } from "../utils/dataLogin";

const Recept = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    // Menu button
    <div
      className="receptContainer"
      onClick={() => menu && !showMenu()}
      onKeyDown={() => menu && !showMenu()}
      role="button"
      tabIndex={0}
    >
      <button
        type="button"
        className="receptContainer__menuButton"
        onClick={() => showMenu()}
        onKeyDown={() => showMenu()}
      >
        Menu
      </button>
      <div>
        {menu && (
          <div className="menu">
            <Menu Menu={Menu} />
          </div>
        )}
      </div>
      <div className="receptContainer__wrapperContainer">
        <div className="receptContainer__wrapperContainer__wrapper">
          <div className="receptContainer__wrapperContainer__wrapper__clip-text receptContainer__wrapperContainer__wrapper__clip-text_one">
            <h1 className="nameH">GAVIN DE ZALTZA</h1>
            <h1> PORTFOLIO</h1>
          </div>
        </div>
      </div>
      <div className="receptContainer__pageContainer">
        <About />
        <Skills />
        <Project />
        <Form formData={dataLogin} />
      </div>
    </div>
  );
};

export default Recept;
