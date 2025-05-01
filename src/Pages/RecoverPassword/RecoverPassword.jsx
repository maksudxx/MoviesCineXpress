import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import styles from "./RecoverPassword.module.css";

export const RecoverPassword = () => {
  const { register, watch } = useForm({
    defaultValues: {
      opcion: "Email",
    },
  });
  
  const opcionSeleccionada = watch("opcion");

  useEffect(() => {
    if (opcionSeleccionada) {
      console.log("Cambio:", opcionSeleccionada);
    }
  }, [opcionSeleccionada]);

  const renderInput = () => {
    const isEmail = opcionSeleccionada === "Email";
    const placeholder = isEmail ? "Email" : "Número de Celular";
    const buttonText = isEmail ? "Enviarme un mail" : "Enviarme un SMS";
    const texto = isEmail
      ? "Te enviaremos un email con instrucciones para restablecer tu contraseña."
      : "Te enviaremos un SMS con el código de verificación para que restablezcas tu contraseña. Pueden aplicar tarifas de SMS y datos.";

    return (
      <div>
        <p>{texto}</p>
        <input type={isEmail ? "email" : "text"} placeholder={placeholder} className={styles.inputText} />
        <input type="submit" value={buttonText} className={styles.buttonSubmit} />
      </div>
    );
  };

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h1>Actualizar la contraseña, el email o el teléfono</h1>
          <form className={styles.formContainer}>
            <p>¿Cómo te gustaría recuperarla?</p>
            <div className={styles.radioContainer}>
              {["Email", "Mensaje de texto"].map((opcion) => (
                <label key={opcion}>
                  <input
                    type="radio"
                    value={opcion}
                    {...register("opcion", { required: true })}
                  />
                  {opcion}
                </label>
              ))}
            </div>

            {opcionSeleccionada && renderInput()}
          </form>

          <Link to="/" className={styles.link}>No me acuerdo de mi email ni de mi teléfono.</Link>
        </div>

        <p className={styles.textCaptcha}>
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot. Mas info.
        </p>
      </div>
    </>
  );
};
