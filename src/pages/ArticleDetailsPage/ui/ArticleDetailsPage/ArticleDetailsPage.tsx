import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import {
    ReducersList,
    useAsyncReducers,
} from 'shared/lib/hooks/useAsyncReducers';
import { AddCommentForm } from 'features/addCommentForm';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Page } from 'shared/ui/Page/Page';
import {
    fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

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
    let { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(
        getArticleRecommendationsIsLoading,
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (__PROJECT__ !== 'storybook') {
        id = '1';
    }

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            <ArticleDetailsPageHeader />
            <ArticleDetails id={id} />
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={recommendations}
                isLoading={recommendationsIsLoading}
                className={cls.recommendations}
                // eslint-disable-next-line i18next/no-literal-string
                target="_blank"
            />
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </Page>
    );
};

export default memo(ArticleDetailsPage);
