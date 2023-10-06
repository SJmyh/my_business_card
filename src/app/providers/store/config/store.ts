import { CombinedState, ReducersMapObject, configureStore, Reducer } from '@reduxjs/toolkit'
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { counter2Reducer } from '@/entities/Counter2';

export const createReduxStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter2: counter2Reducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];