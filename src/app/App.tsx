import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';

import { Navbar } from 'widget/Navbar';
import { AppRouter } from 'app/providers/router';

import './styles/index.scss';
import { Sidebar } from 'widget/Sidebar';
import { Suspense } from 'react';

export function App() {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}
