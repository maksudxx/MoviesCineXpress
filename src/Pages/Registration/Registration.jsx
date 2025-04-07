import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import imgDevice from "../../Assets/Devices.png";
import styles from "./Registration.module.css";
//Los valores de useLocation provienen del componente EmailForm en donde el correo que se carga ahi se lo envia como
//props en esta vista.
export const Registration = () => {
  const { state } = useLocation();
  const { email } = state;

  return (
    <>
      <Header />
      <div className={styles.registrationContainer}>
        <div className={styles.registration}>
          <img
            src={imgDevice}
            alt="Dispositivos"
            className={styles.imgDevices}
          />
          <p>PASO 1 DE 4</p>
          <h1>Completa la configuración de tu cuenta</h1>
          <p>CineXpress está personalizado para ti.</p>
          <p>Crea una contraseña para comenzar a ver CineXpress.</p>
          <Link to="/" className={styles.link}>
            <div className={styles.buttonNext}>Siguiente</div>
          </Link>
        </div>
      </div>
    </>
  );
};
