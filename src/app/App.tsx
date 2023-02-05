import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";

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
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
