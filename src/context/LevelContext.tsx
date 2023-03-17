import React, { createContext, useReducer } from 'react'
import { levelReducer, LevelState } from './authReducer'

type LevelContextProps = {
    level: number | null
    mission: number | null
    totalMissions: number | null
    saveLevel: (level: number, totalMissions: number) => void
    saveMission: (mission: number) => void
}

const loginInitialState: LevelState = {
    level: null,
    mission: null,
    totalMissions: null,
}

export const LevelContext = createContext({} as LevelContextProps)

export const LevelProvider = ({ children }: any) =>  {

    const [state, dispatch] = useReducer(levelReducer, loginInitialState)

    const saveLevel = (level: number, totalMissions: number) => {
        dispatch({ type: 'saveLevel', payload: { level, totalMissions } })
    }

    const saveMission = (mission: number) => {
        dispatch({ type: 'saveMission', payload: mission })
    }

    return (
        <LevelContext.Provider value={{
            ...state,
            saveLevel,
            saveMission
        }}>
            { children }
        </LevelContext.Provider>
    )
}