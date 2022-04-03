import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Gender, User } from './../../models/Users'

export interface UserState {
    users: User[],
    loading: boolean,
    error: string,
    filterGender: string
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: '',
    filterGender: Gender.ALL
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state, action: PayloadAction<User>) {
            state.loading = true
        },
        createUserSuccess(state, action: PayloadAction<User>) {
            state.users.push(action.payload)
            state.loading = false
        },
        createUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
        deleteUser(state, action: PayloadAction<number>) {
            state.loading = true
        },
        deleteUserSuccess(state, action: PayloadAction<number>) {
            console.log(action.payload)
            state.users = state.users.filter(user => user.id !== action.payload)
            state.loading = false
        },
        deleteUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
        filterByGender(state, action: PayloadAction<string>) {
            state.loading = true
        },
        filterByGenderSuccess(state, action: PayloadAction<string>) {
            console.log(action.payload)
            state.filterGender = action.payload
            state.loading = false
        },
        filterByGenderError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        },
    }
})

export default userSlice.reducer
