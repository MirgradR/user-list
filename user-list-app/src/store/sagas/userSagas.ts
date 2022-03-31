import { put, takeEvery } from 'redux-saga/effects'
import { User } from './../../models/Users'
import { userSlice } from './../reducers/userReducer.ts'

export type CreateUserAction = {
    type: string,
    payload: User,
}

function* createUser(action: CreateUserAction) {
    try {
        yield put(userSlice.actions.createUserSuccess(action.payload));
    } catch (error) {
        yield put(userSlice.actions.createUserError((error as Error).message));
    }
}

export function* userSaga() {
    yield takeEvery(userSlice.actions.createUser, createUser);
}
