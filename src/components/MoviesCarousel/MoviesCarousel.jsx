import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";  // Importar PropTypes
import styles from "./MoviesCarousel.module.css";
import Movies from "../../Movies.json";
import { MovieCard } from "../MovieCard/MovieCard";

export const MoviesCarousel = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Inicia en la primera película
  const [itemsToShow, setItemsToShow] = useState(1);
  const containerRef = useRef(null);
  const [maxIndex, setMaxIndex] = useState(3); // Default max index for larger screens

  // Calcula cuántas tarjetas pueden caber según el ancho del contenedor
  const updateItemsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 280;
      const visibleItems = Math.floor(containerWidth / cardWidth);

      // Garantiza que no haya más elementos visibles de los disponibles
      setItemsToShow(Math.min(visibleItems, Movies.length));
    }

    // Definir maxIndex dependiendo de la resolución
    const isMobile = window.matchMedia("(min-width: 320px) and (max-width: 480px)").matches;
    if (isMobile) {
      setMaxIndex(10); 
    } else {
      setMaxIndex(3);
    }
  };

  useEffect(() => {
    updateItemsToShow(); // Calcula al cargar
    window.addEventListener("resize", updateItemsToShow); // Recalcula al redimensionar
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsToShow <= maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + itemsToShow);
    } else {
      setCurrentIndex(maxIndex); // Evitar pasar el índice máximo
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsToShow >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsToShow);
    } else {
      setCurrentIndex(0); // Evitar índices negativos
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.mainContainer}>
        <button
          className={styles.navButton}
          onClick={handlePrev}
          style={{ display: currentIndex === 0 ? "none" : "block" }} // Oculta si está en el índice 0
        >
          {"<"}
        </button>
        <div className={styles.sliderContainer} ref={containerRef}>
          <ul
            className={styles.containerImages}
            style={{
              transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {Movies.map(({ poster_path, id }, index) => (
              <MovieCard key={`${id}-${index}`} img={poster_path} />
            ))}
          </ul>
        </div>
        <button
          className={styles.navButton}
          onClick={handleNext}
          style={{ display: currentIndex >= maxIndex ? "none" : "block" }} // Oculta si se ha alcanzado el índice máximo
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

// PropTypes para definir las propiedades del componente
MoviesCarousel.propTypes = {
  title: PropTypes.string.isRequired, 
};
