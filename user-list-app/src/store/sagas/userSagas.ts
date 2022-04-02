import { put, takeEvery } from 'redux-saga/effects'
import { User } from './../../models/Users'
import { userSlice } from './../reducers/userReducer'

export type CreateUserAction = {
    type: string,
    payload: User,
}

export type DeleteUserAction = {
    type: string,
    payload: number,
}

function* createUser(action: CreateUserAction) {
    try {
        yield put(userSlice.actions.createUserSuccess(action.payload))
    } catch (error) {
        yield put(userSlice.actions.createUserError((error as Error).message))
    }
}

function* deleteUser(action: DeleteUserAction) {
    try {
        yield put(userSlice.actions.deleteUserSuccess(action.payload))
    } catch (error) {
        yield put(userSlice.actions.deleteUserError((error as Error).message))
    }
}

export function* userSaga() {
    yield takeEvery(userSlice.actions.createUser, createUser)
    yield takeEvery(userSlice.actions.deleteUser, deleteUser)
}
