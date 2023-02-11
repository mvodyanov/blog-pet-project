import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback={<div>{t('Загрузка')}</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>{t('Загрузка')}</div>}>
                                <div className="page-wrapper">{element}</div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
