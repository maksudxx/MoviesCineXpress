import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import styles from "./Register.module.css";

export const Register = () => {
  const { state } = useLocation();
  const { email } = state;
  const { register, handleSubmit } = useForm();
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <p>PASO 1 de 4</p>
          <h1>Crea una contraseña para que comiences tu membresía</h1>
          <p>¡Unos pasos más y listo!</p>
          <p>Tampoco nos gustan los trámites.</p>
          <form action="onSubmit" className={styles.formContainer}>
            <input
              type="email"
              value={email}
              placeholder="Agrega un correo"
              className={styles.inputsForm}
            />
            <input type="password" placeholder="Agrega una contraseña" className={styles.inputsForm}/>
            <input type="submit" className={styles.buttonSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};
