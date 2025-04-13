import { MdOutlineVerifiedUser } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import styles from "./VerifyEmail.module.css";
export const VerifyEmail = () => {
  const { state } = useLocation();
  const { email } = state;
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.containerInfo}>
          <div className={styles.containerIcon}>
            <MdOutlineVerifiedUser />
          </div>
          <p>PASO 2 DE 4</p>
          <h1>¡Excelente! Ahora verifiquemos tu email</h1>
          <p>
            Haz clic en el enlace que enviamos a <strong>{email}</strong> para
            completar la verificación.
          </p>
          <p>
            Al verificar tu email, podrás mejorar la seguridad de la cuenta y
            recibir comunicaciones importantes de CineXpress
          </p>
          <button
            className={styles.btnSkip}
            onClick={() => {
              alert("proximamente :) ♥");
              navigate("/")
            }}
          >
            Omitir
          </button>
        </div>
      </div>
    </>
  );
};
