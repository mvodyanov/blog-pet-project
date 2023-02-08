import { classNames } from "shared/lib/classNames/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";

import Style from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(Style.navbar, {}, [className])}>
      <div className={Style.links}>
        <AppLink to="/" className={Style.mainLink}>
          Main
        </AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
