import { useState, useEffect, useRef } from "react";
import styles from "./MoviesCarousel.module.css";
import Movies from "../../Movies.json";
import { MovieCard } from "../MovieCard/MovieCard";

// eslint-disable-next-line react/prop-types
export const MoviesCarousel = ({ title }) => {
  const [currentIndex, setCurrentIndex] = useState(Movies.length); // Inicia en el primer set duplicado
  const [itemsToShow, setItemsToShow] = useState(1);
  const containerRef = useRef(null);

  // Duplicamos las películas al principio y al final
  const duplicatedMovies = [...Movies, ...Movies, ...Movies];

  // Calcula cuántas tarjetas pueden caber según el ancho del contenedor
  const updateItemsToShow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth; // Ancho del contenedor
      const cardWidth = 270; // Ancho de la tarjeta incluyendo márgenes/padding
      const visibleItems = Math.floor(containerWidth / cardWidth); // Número de tarjetas que caben
      setItemsToShow(Math.max(visibleItems, 1)); // Al menos mostrar 1 tarjeta
    }
  };

  useEffect(() => {
    updateItemsToShow(); // Calcula al cargar
    window.addEventListener("resize", updateItemsToShow); // Recalcula al redimensionar
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Corrección para evitar saltos bruscos
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setCurrentIndex(Movies.length); // Reubicar al último set original
      }, 300); // Tiempo de transición
    } else if (currentIndex === duplicatedMovies.length - itemsToShow) {
      setTimeout(() => {
        setCurrentIndex(Movies.length - itemsToShow); // Reubicar al primer set original
      }, 100); // Tiempo de transición
    }
  }, [currentIndex, itemsToShow]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.mainContainer}>
        <button className={styles.navButton} onClick={handlePrev}>
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
            {duplicatedMovies.map(({ poster_path, id }, index) => (
              <MovieCard key={`${id}-${index}`} img={poster_path} />
            ))}
          </ul>
        </div>
        <button className={styles.navButton} onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};
