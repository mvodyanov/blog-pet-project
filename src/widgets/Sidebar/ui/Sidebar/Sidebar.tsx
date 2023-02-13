import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={classNames(
                Style.Sidebar,
                { [Style.collapsed]: collapsed },
                [
                    className,
                ],
            )}
        >
            <Button onClick={onToggle}>{t('Переключить')}</Button>
            <div className={Style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
