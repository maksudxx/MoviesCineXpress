import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import styles from "./Register.module.css";

export const Register = () => {
  const { state } = useLocation();
  const { email } = state;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email,
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p>PASO 1 de 4</p>
          <h1>Crea una contraseña para que comiences tu membresía</h1>
          <p>¡Unos pasos más y listo!</p>
          <p>Tampoco nos gustan los trámites.</p>
          <form onSubmit={onSubmit} className={styles.formContainer}>
            <input
              type="email"
              placeholder="Agrega un correo"
              className={styles.inputsForm}
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo es obligatorio",
                },
              })}
            />
            {errors.email && <span>{errors.email.message}</span>}
            <input
              type="password"
              placeholder="Agrega una contraseña"
              className={styles.inputsForm}
              {...register("password", {
                required: {
                  value: true,
                  message: "La contraseña es obligatoria",
                },
              })}
            />
            {errors.password && <span>{errors.password.message}</span>}
            <input type="submit" className={styles.buttonSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};
