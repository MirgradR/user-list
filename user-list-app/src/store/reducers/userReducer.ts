import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './../../models/Users.ts'

interface UserState {
    users: User[],
    loading: boolean,
    error: string,
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        createUser(state, action: PayloadAction<number>) {
            state.loading = true
        },
        createUserSuccess(state, action: PayloadAction<number>) {
            state.users.push(action.payload)
            state.loading = false
        },
        createUserError(state, action: PayloadAction<string>) {
            state.error = action.payload
            state.loading = false
        }
    }
})

export default userSlice.reducer
