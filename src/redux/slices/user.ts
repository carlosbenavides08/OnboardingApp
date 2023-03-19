import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Data } from '../../interfaces/User';
import { Datum, Mission } from '../../interfaces/Mission';

interface UserState {
    id: string
    levelId: string
    missionId?: string
    data: []
    status: 'checking' | 'authenticated' | 'not-authenticated'
    levels: Data[]
    missions: Datum[]
}

const initialState: UserState = {
    id: '',
    levelId: '',
    missionId: '',
    data: [],
    status: 'checking',
    levels: [],
    missions: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        notAuth: (state) => {
            return {
                ...state,
                status: 'not-authenticated'
            }
        },
        auth: (state) => {
            return {
                ...state,
                status: 'authenticated'
            }
        },
        setLevels: (state, action: PayloadAction<Data[]>) => {
            return {
                ...state,
                levels: [...action.payload]
            }
        },
        setMissions: (state, action: PayloadAction<Datum[]>) => {
            return {
                ...state,
                missions: [...action.payload]
            }
        }

    },
})

export const { setLevels, notAuth, auth, setMissions } = userSlice.actions
