import styles from "./LandingEmailForm.module.css";
import { EmailForm } from "../EmailForm/EmailForm";
export const LandingEmailForm = () => {
  return (
    <div className={styles.containerEmailForm}>
      <h1>Películas y series ilimitadas y mucho más</h1>
      <h2>A partir de $ 5.999. Cancela cuando quieras.</h2>
      <EmailForm />
    </div>
  );
};
