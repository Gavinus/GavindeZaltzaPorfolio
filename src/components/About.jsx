import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutContainer">
        <div className="aboutMeContainer">
          <h1>About</h1>
          <p>
            Hello! My name is Gavin de Zaltza, live in West-Cost of France. I’ve
            31 years old, I started the code at the beginning of 2022, and I
            love it... Currently a junior developer, I am thirsty for knowledge
            and work every day for always better.
          </p>
        </div>
        <div className="aboutImgContainer">
          <img type="image" src="../public/assets/gavtof.jpg" alt="myPicture" />
        </div>
      </div>
    </div>
  );
};

export default About;
