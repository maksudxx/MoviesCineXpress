import { FaFilm } from "react-icons/fa";
import styles from "./Header.module.css";
export const Header = () => {
  const languages = [
    { code: "es", name: "Español" },
    { code: "en", name: "Ingles" },
    { code: "fr", name: "Frances" },
    { code: "pt", name: "Portugues" },
    { code: "ja", name: "Japones" },
    { code: "de", name: "Alemán" },
    { code: "ko", name: "Koreano" },
    { code: "it", name: "Italiano" },
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.containerNavbarTitle}>
        <FaFilm className={styles.containerNavbarTitleIcon} />
        <div className={styles.titleLogo}>CineXpress</div>
      </div>
      <div className={styles.containerOptionNavbar}>
        <select id="language-select" className={styles.selectLanguages}>
          {languages.map(({code, name}) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
        <div className={styles.buttonSigIn}>Iniciar Sesión</div>
      </div>
    </header>
  );
};
