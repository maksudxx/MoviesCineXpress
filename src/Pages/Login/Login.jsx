import { FaFilm } from "react-icons/fa";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <main className={styles.loginContainer}>
        <div className={styles.formLoginContainer}>
          <Link to='/'className={styles.link}>
            <div className={styles.containerNavbarTitle}>
              <FaFilm className={styles.containerNavbarTitleIcon} />
              <div className={styles.titleLogo}>CineXpress</div>
            </div>
          </Link>
          <div className={styles.formLogin}>
            <p className={styles.title}>Iniciar Sesión</p>
            <input
              type="email"
              placeholder="Email o número de celular"
              className={`${styles.inputLogin} ${styles.inputs}`}
            />
            <input
              type="password"
              placeholder="Contraseña"
              className={`${styles.inputLogin} ${styles.inputs}`}
            />
            <button className={`${styles.buttonLogin} ${styles.inputs}`}>
              Iniciar sesión
            </button>
            <p className={styles.textLogin}>O</p>
            <button className={`${styles.buttonLogin2} ${styles.inputs}`}>
              Usar un código de inicio de sesión
            </button>
            <p className={styles.textLogin}>
              <Link to="/" className={styles.link}>
                ¿Olvidaste la contraseña?
              </Link>
            </p>
          </div>
          <label className={`${styles.textLogin} ${styles.checkboxLogin}`}>
            <input
              type="checkbox"
              id="myCheckbox"
              className={styles.checkbox}
            />
            Recordarme
          </label>
          <p className={`${styles.textLogin} ${styles.textLogin2}`}>
            ¿Primera vez en CineXpress?{" "}
            <Link to="/" className={styles.link}>
              Suscribite ya.
            </Link>
          </p>
          <p className={styles.textLogin2}>
            Esta página esta protegida por Google reCAPTCHA para comprobar que
            no eres un robot.{" "}
            <Link to="/" className={styles.link}>
              Más info.
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};
