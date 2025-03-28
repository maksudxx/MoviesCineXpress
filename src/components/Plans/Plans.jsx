import { CardPlans } from "../CardPlans/CardPlans";
import styles from "./Plans.module.css";
export const Plans = () => {
  const plansList = [
    {
      plan: "Básico",
      resolution: "720p",
      services: [
        "Buena calidad de video",
        "Para tu teléfono, table, laptop y TV",
      ],
      price: "$5.999 al mes",
    },
    {
      plan: "Estandar",
      resolution: "1080p",
      services: [
        "Excelente calidad de video",
        "Para tu teléfono, table, laptop y TV",
      ],
      price: "$9.999 al mes",
    },
    {
      plan: "Premium",
      resolution: "4k + HDR",
      services: [
        "Calidad de video óptima",
        "Sonido inmersivo (audio espacial)",
        "Para tu teléfono, table, laptop y TV",
      ],
      price: "$13.499 al mes",
    },
  ];
  return (
    <>
      <div className={styles.plansContainer}>
        <p className={styles.titleInfo}>Planes</p>
        <ul className={styles.cardsContainer}>
          {plansList.map(({ plan, resolution, services, price }, index) => (
            <CardPlans
              key={index}
              plan={plan}
              resolution={resolution}
              services={services}
              price={price}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
