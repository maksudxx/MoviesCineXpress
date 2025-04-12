import { useForm } from "react-hook-form";
import styles from "./EmailForm.module.css";
import { useNavigate } from "react-router-dom";

export const EmailForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    const { email } = data;
    navigate("/signup/registration", { state: { email } });
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.textLanding}>
        ¿Quieres ver CineXpress ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresia de CineXpress.
      </h3>
      <form className={styles.emailContainer} onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          className={styles.inputEmail}
          {...register("email", { required: true })}
        />
        <button type="submit" className={styles.buttonStart}>
          Comenzar
        </button>
      </form>
    </div>
  );
};
