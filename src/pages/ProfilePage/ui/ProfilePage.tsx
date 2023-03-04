import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import {
    ReducersList,
    useAsyncReducers,
} from 'shared/lib/hooks/useAsyncReducers';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard';

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
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames('', {}, [className])}>
            {t('PROFILE PAGE')}
            <ProfileCard />
        </div>
    );
};

export default ProfilePage;
