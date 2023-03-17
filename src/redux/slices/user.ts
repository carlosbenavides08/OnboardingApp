import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    id: string
    levelId: string
    missionId?: string
    data: string
}

const initialState: UserState[] = []

export const userSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserState[]>) => {
            return [...action.payload]
        }
    },
})

export const { login } = userSlice.actions
