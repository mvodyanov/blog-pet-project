import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    ReducersList,
    useAsyncReducers,
} from '@/shared/lib/hooks/useAsyncReducers';
import { Page } from '@/shared/ui/Page/Page';
import { VStack } from '@/shared/ui/Stack';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { articleDetailsPageReducer } from '../../model/slices';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    useAsyncReducers({ reducers });
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <VStack gap="16" max>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <ArticleRecommendationsList />
                <ArticleDetailsComments id={id} />
            </VStack>
        </Page>
    );
};

export default memo(ArticleDetailsPage);
