import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";
import { useTheme } from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      toggle theme
    </button>
  );
};
