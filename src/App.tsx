import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => { 
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {myClassname: true}, [theme])}>
      <div>
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
