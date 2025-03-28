import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import styles from "./FQCard.module.css";
import { useState } from "react";
import { TfiClose } from "react-icons/tfi";

export const FQCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const parrafos = answer.split("/");
  
  return (
    <li className={styles.fqContainer}>
      <div className={styles.questionContainer} onClick={() => setOpen(!open)}>
        <p>{question}</p>
        {open ? <TfiClose /> : <FaPlus />}
      </div>
      {open ? (
        <div className={styles.answerContainer}>
          {parrafos.map((parrafo, index) => (
            <p key={index}>{parrafo}</p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </li>
  );
};

FQCard.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
