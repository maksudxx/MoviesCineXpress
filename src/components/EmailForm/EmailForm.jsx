import { Link } from "react-router-dom";
import styles from "./EmailForm.module.css";

export const EmailForm = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.textLanding}>
        ¿Quieres ver CineXpress ya? Ingresa tu email para crear una cuenta o
        reiniciar tu membresia de CineXpress.
      </h3>
      <div className={styles.emailContainer}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.inputEmail}
        />
        <Link to='/login' className={styles.link}>
          <div className={styles.buttonStart}>Comenzar</div>
        </Link>
      </div>
    </div>
  );
};
