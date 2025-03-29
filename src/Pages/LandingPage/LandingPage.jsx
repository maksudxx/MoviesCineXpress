import { Header } from "../../components/Header/Header";
import { MoviesCarousel } from "../../components/MoviesCarousel/MoviesCarousel";
import { InfoLanding } from "../../components/InfoLandingContainer/InfoLanding";
import { LandingEmailForm } from "../../components/LandingEmailForm/LandingEmailForm";
import { FQContainer } from "../../components/FQContainer/FQContainer";
import { Plans } from "../../components/Plans/Plans";
import styles from "./LandingPage.module.css";
import { EmailForm } from "../../components/EmailForm/EmailForm";
export const LandingPage = () => {
  return (
    <div className={styles.containerLanding}>
      <Header />
      <main className={styles.containerMain}>
        <LandingEmailForm />
        <MoviesCarousel title="Tendencias" />
        <Plans/>
        <InfoLanding />
        <FQContainer />
        <EmailForm />
      </main>
    </div>
  );
};
