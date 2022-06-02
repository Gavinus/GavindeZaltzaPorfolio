import React from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import Drakkar from "./Drakkar";

const Menu = () => {
  return (
    <div className="menuContainer">
      {/* THREE.JS */}
      {/* <div className="canvasContainer">
        <Canvas> */}
      {/* <Environment background="black" /> */}
      {/* <ambientLight intensity={0.5} />
          <spotLight color="blue" angle={0.3} position={[0, 30, 0]} />
          <spotLight color="#17EEEE" angle={0.6} position={[10, 0, 0]} />
          <spotLight color="#17EEEE" angle={0.9} position={[1, 30, 0]} />
          <Drakkar
            scale={0.02}
            position={[-3, -2, -0.8]}
            rotation={[0, Math.PI / 3.5, 0]}
          />
        </Canvas>
      </div> */}
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
            <li className="about">
              <a href="#about">
                <span>ABOUT</span>
              </a>
            </li>
            <li>
              <a href="#school">
                <span>SOFT SKILLS</span>
              </a>
            </li>
            <li>
              <a href="#skills">
                <span>SCHOOL CAREER</span>
              </a>
            </li>
            <li className="contact">
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
