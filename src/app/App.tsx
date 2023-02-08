import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";

import { Navbar } from "widget/Navbar";
import { AppRouter } from "app/providers/router";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { myClassname: true }, [theme])}>
      <Navbar />
      <AppRouter />
      <div>
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
    </div>
  );
};
