import styles from './Footer.module.css'
export const Footer = () => {
  const options = [
    "Preguntas frecuentes",
    "Relaciones con inversionistas",
    "Privacidad",
    "Prueba de velocidad",
    "Centro de ayuda",
    "Empleo",
    "Preferencias de cookies",
    "Avisos legales",
    "Cuenta",
    "Formas de ver",
    "Solo en CineXpress",
    "Prensa",
    "Términos de uso",
    "Contáctanos"
  ];
  return (
    <>
      <footer className={styles.footerContainer}>
        <p className={styles.pagraph}>¿Preguntas? Llama al 9999 222 222 999</p>
        <ul className={styles.optionsContainer}>
          {options.map((option, index)=>(
            <li key={index}>{option}</li>
          ))}
          
        </ul>
        <p className={styles.pagraph}>CineXpress Argentina</p>
      </footer>
    </>
  );
};
