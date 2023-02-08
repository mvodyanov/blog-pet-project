import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

import Style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(Style.navbar, {}, [className])}>
      <div className={Style.links}>
        <Link to="/" className={Style.mainLink}>
          Main
        </Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};
