import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Data } from '../../interfaces/User';

interface MissionState {
    studentCode: string | null
    numberLevel: number | null
    numberMission: number | null
    response: string | null
    score: number | null
}

const initialState: MissionState = {
    studentCode: null,
    numberLevel: null,
    numberMission: null,
    response: null,
    score: null,
}

export const missionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        finish: (state, action: PayloadAction<MissionState>) => {
            return {
                ...state,
                studentCode: action.payload.studentCode,
                level: action.payload.numberLevel,
                mission: action.payload.numberMission,
                response: action.payload.response,
                score: action.payload.score,
            }
        },
    },
})

export const { finish } = missionSlice.actions
