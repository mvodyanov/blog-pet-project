import { useTranslation } from 'react-i18next';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import Style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(Style.navbar, {}, [className])}>
            <div className={Style.links} />
        </div>
    );
};
