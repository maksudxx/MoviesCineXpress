import PropTypes from "prop-types";
import styles from "./MovieCard.module.css"
// eslint-disable-next-line react/prop-types
export const MovieCard = ({ title, img }) => {
  const urlImg = `https://image.tmdb.org/t/p/w300/${img}`;
  return (
    <li className={styles.movieCard}>
      <img src={urlImg} alt={title} className={styles.movieImg}/>
    </li>
  );
};

MovieCard.propTypes = {
  img: PropTypes.string,
};
