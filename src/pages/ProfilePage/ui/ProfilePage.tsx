import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import { ReducersList, useAsyncReducers } from 'shared/lib/hooks/useAsyncReducers';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    useAsyncReducers({
        reducers,
    });
    const { t } = useTranslation();

    return (
        <div className={classNames('', {}, [className])}>{t('PROFILE PAGE')}</div>
    );
};

export default ProfilePage;
