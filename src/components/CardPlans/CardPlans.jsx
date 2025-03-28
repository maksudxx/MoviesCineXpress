import styles from './CardPlans.module.css'
import PropTypes from "prop-types";

export const CardPlans = ({ plan, resolution, services, price }) => {
  return (
    <li className={`${styles.CardContainer} ${styles[plan]}`}>
      <h2>{plan}</h2>
      <h3>Resolución: {resolution}</h3>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <h3>Precio: {price}</h3>
    </li>
  );
};

CardPlans.propTypes = {
  services: PropTypes.array.isRequired, 
  plan: PropTypes.string.isRequired,
  resolution: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
};
