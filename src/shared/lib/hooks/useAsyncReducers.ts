import {
    ReduxStoreWithManager,
    StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { Reducer } from '@reduxjs/toolkit';

import { useStore, useDispatch } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface UseAsyncReducerProps {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const useAsyncReducers = (props: UseAsyncReducerProps) => {
    const { reducers, removeAfterUnmount = true } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();

        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            // Добавляем новый редюсер только если его нет
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name, reducer]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        dispatch({ type: `@DESTROY ${name} reducer` });
                    },
                );
            }
        };
    // eslint-disable-next-line
  }, []);
};
