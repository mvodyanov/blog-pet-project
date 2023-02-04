import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./index.scss";
import AboutPage from "./pages/AboutPage/AboutPage";
import MainPage from "./pages/MainPage/MainPage";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path={"/"} element={<MainPage/>} />
        <Route path={"/about"} element={<AboutPage/>} />
      </Routes>
    </div>
  );
};
