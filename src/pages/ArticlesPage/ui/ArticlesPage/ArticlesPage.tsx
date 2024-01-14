import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { ReducersList, useAsyncReducers } from '@/shared/lib/hooks/useAsyncReducers';
import { Page } from '@/shared/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface ArticlesPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    useAsyncReducers({
        reducers,
        removeAfterUnmount: false,
    });
    const { className } = props;
    const dispatch = useAppDispatch();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    return (
        <Page
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ArticlesPage, {}, [className])}
        >
            <ArticlesPageFilters />
            <ArticleInfiniteList className={cls.list} />

        </Page>
    );
};

export default memo(ArticlesPage);
