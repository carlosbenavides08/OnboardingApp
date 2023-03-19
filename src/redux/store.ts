import { configureStore } from '@reduxjs/toolkit'
import { missionSlice, userSlice } from './slices'

export const store = configureStore({
    reducer: {
        userReducer: userSlice.reducer,
        missionReducer: missionSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
