import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('translation');
    return (
        <div>
            {t('Главная страница')}
            <Counter />
        </div>
    );
};

export default MainPage;
