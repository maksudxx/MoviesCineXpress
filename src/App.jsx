import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};
