import { classNames } from 'shared/lib/classNames/classNames';
import Style from './Sidebar.module.scss';
import {useState} from "react";
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div
            className={classNames(Style.Sidebar, {[Style.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={Style.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

