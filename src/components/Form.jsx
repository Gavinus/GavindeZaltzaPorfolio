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
    <div className="contactContainer" id="contact">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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
          <button className="formButton" type="submit">
            Envoyer
          </button>
        </form>

        <div className="cvContainer">
          <h1>Curriculum Vitae</h1>
          <a href="../public/assets/GavinCV2022.pdf" download>
            <img
              src="../../public/assets/vikingrunescv.png"
              alt="runeButtonCv"
              role="button"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
