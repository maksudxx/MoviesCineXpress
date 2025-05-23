import { FaFilm } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
export const Header = () => {
  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "Ingles" },
  ];

  const navigate = useNavigate();

  return (
    <header className={styles.headerContainer}>
      <div
        className={styles.containerNavbarTitle}
        onClick={() => {
          navigate("/");
        }}
      >
        <FaFilm className={styles.containerNavbarTitleIcon} />
        <div className={styles.titleLogo}>CineXpress</div>
      </div>
      <div className={styles.containerOptionNavbar}>
        <select id="language-select" className={styles.selectLanguages}>
          {languages.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <Link to="/login" className={styles.link}>
          <p className={styles.buttonSigIn}>Iniciar Sesión</p>
        </Link>
      </div>
    </header>
  );
};
