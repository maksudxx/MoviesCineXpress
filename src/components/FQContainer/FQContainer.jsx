import { FQCard } from "../FQCard/FQCard";
import styles from "./FQContainer.module.css";
export const FQContainer = () => {
  let fq = [
    {
      question: "¿Qué es CineXpress?",
      answer: `CineXpress es un serivcio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet./Todo lo que quieras ver, 
      sin limites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!`,
    },
    {
      question: "¿Cuánto cuesta CineXpress?",
      answer: `Disfruta CineXpress en tu smartphone, tablet, smart TV, laptop o dispositivos de streaming, todo por una tarifa plana mensual.
      Planes desde $5.999 hasta $13.499 al mes (sin impuestos incluidos). Sin costos adicionales ni contratos.`,
    },
    {
      question: "¿Donde puedo ver CineXpress?",
      answer: `Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de CineXpress para ver contenido al instante a través de cinexpress.com desde tu
      computadora personal o cualquier dispositivo con conexión a internet que cuente con la app de CineXpress, como smart TV, smartphones,tablets, reproductores multimedia y consola de 
      juegos./Además, puedes descargar tus series favoritas con la app para iOS o Android. Con la funcion de descarga, puedes ver contenido donde vayas y sin conexión
      a internet. Lleva CineXpress contigo adonde sea.`,
    },
    {
      question: "¿Cómo cancelo?",
      answer: `CineXpress es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación.
      Empieza y termina cuando quieras.`,
    },
    {
      question: "¿Qué puedo ver en CineXpress?",
      answer: `CineXpress tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, 
      cuando quieras.`,
    },
    {
      question: "¿Es bueno CineXpress para los niños?",
      answer: `La experiencia de CineXpress para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series
      y películas familiares en su propio espacio./Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido
      que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean.`,
    },
  ];
  return (
    <>
      <div className={styles.fqContainer}>
        <p className={styles.titleInfo}>Preguntas Frecuentes</p>
        <ul className={styles.cardsFQContainer}>
          {fq.map(({ question, answer }, index) => (
            <FQCard question={question} answer={answer} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};
