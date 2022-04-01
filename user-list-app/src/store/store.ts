import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userSaga } from './sagas/userSagas'
import userReducer from './reducers/userReducer'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    userReducer
})

const setupStore = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: false,
            immutableCheck: false,
            serializableCheck: false
        }).concat(sagaMiddleware),
})

sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof rootReducer>

export default setupStore
