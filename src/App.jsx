import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { Registration } from "./Pages/Registration/Registration";

export const App = () => {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/login", element: <Login /> },
    { path: "/signup/registration", element: <Registration /> },
    { path: "/signup/register", element: <Register /> },
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
