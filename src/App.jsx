import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Login } from "./Pages/Login/Login";
import { RecoverPassword } from "./Pages/RecoverPassword/RecoverPassword";
import { Register } from "./Pages/Register/Register";
import { Registration } from "./Pages/Registration/Registration";
import { VerifyEmail } from "./Pages/VerifyEmail/VerifyEmail";

export const App = () => {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/loginHelp", element: <RecoverPassword /> },
    { path: "/signup/registration", element: <Registration /> },
    { path: "/signup/register", element: <Register /> },
    { path: "/signup/verifyemail", element: <VerifyEmail /> },
  ];

  return (
    <>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};
