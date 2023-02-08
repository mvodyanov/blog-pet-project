import { Link } from "react-router-dom";

import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { classNames } from "shared/lib/classNames/classNames";

import "./styles/index.scss";
import { AppRouter } from "./providers/router/ui";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { myClassname: true }, [theme])}>
      <div>
        <button onClick={toggleTheme}>toggle theme</button>
      </div>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <AppRouter />
    </div>
  );
};
