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
          <h1>For your coordonates</h1>
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
          <button type="submit">Envoyer</button>
        </form>
        <div className="cvContainer">
          <h1>If you need my CV</h1>
          <img
            src="../../public/assets/vikingrunescv.png"
            alt="runeButtonCv"
            role="button"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
