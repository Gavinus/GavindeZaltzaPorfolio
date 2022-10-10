import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__aboutContainer">
        <div className="about__aboutContainer__aboutMeContainer">
          <h1>About</h1>
          <p>
            Bonjour!!! Je m&apos;appel <span>Gavin de Zaltza</span>, en
            reconversion j&apos;ai décidé de me lancer dans le{" "}
            <span>Developpement Web</span> début d&apos;année 2022. Après avoir
            réussi une formation <span>Full Stack</span> de 5 mois, je recherche
            une <span>entreprise</span> ou une <span>alternance</span> pour
            travailler dans le milieu et continuer à <span>apprendre</span> et
            faire <span>évoluer</span> mes connaissances.
          </p>
        </div>
        <div className="about__aboutContainer__aboutImgContainer">
          <img
            type="image"
            src="../public/assets/image/gavtof.jpg"
            alt="myPicture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
