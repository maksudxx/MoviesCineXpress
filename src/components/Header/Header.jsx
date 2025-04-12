import { FaFilm } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export const Header = () => {
  const navigate = useNavigate();

  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "Inglés" },
  ];

  return (
    <header className={styles.headerContainer}>
      <button
        className={styles.containerNavbarTitle}
        onClick={() => navigate("/")}
      >
        <FaFilm className={styles.containerNavbarTitleIcon} />
        <span className={styles.titleLogo}>CineXpress</span>
      </button>

      <div className={styles.containerOptionNavbar}>
        <select id="language-select" className={styles.selectLanguages}>
          {languages.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>

        <Link to="/login" className={styles.link}>
          <span className={styles.buttonSigIn}>Iniciar Sesión</span>
        </Link>
      </div>
    </header>
  );
};
