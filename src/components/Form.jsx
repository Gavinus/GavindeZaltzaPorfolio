import React from "react";
import { useForm } from "react-hook-form";
import { formatText } from "../utils/utils";

/* eslint-disable */
const Form = ({ formData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    // <div className="contactContainer" >
    <div className="formContainer" id="contact">
      <form onSubmit={handleSubmit(onSubmit)} className="formContainer__form">
        <h1>Vos Coordonnées</h1>
        {formData &&
          formData.map((data, index) => (
            <label key={index}>
              {data.label && data.label}
              <input
                type={data.type}
                placeholder={data.placeholder && data.placeholder}
                {...register(data.name, { required: data.required })}
              />
              {Object.keys(errors).includes(data.name) && (
                <p>{`${formatText(data.name)} est requis`}</p>
              )}
            </label>
          ))}
        <button className="formContainer__form__formButton" type="submit">
          Envoyer
        </button>
      </form>

      <div className="formContainer__cvContainer">
        <a href="./assets/image/GavinCV2022.pdf" download>
          <img src="./assets/image/vikingrunescv.png" alt="Cv" role="button" />
        </a>
      </div>
    </div>
    // </div>
  );
};

export default Form;
