import React, { createContext, useReducer } from 'react'
import { levelReducer, LevelState } from './levelReducer'

type LevelContextProps = {
    level: number | null
    mission: number | null
    totalMissions: number | null
    saveLevel: (level: number | null, totalMissions: number | null) => void
    saveMission: (mission: number | null) => void
}

const loginInitialState: LevelState = {
    level: null,
    mission: null,
    totalMissions: null,
}

export const LevelContext = createContext({} as LevelContextProps)

export const LevelProvider = ({ children }: any) =>  {

    const [state, dispatch] = useReducer(levelReducer, loginInitialState)

    const saveLevel = (level: number | null, totalMissions: number | null) => {
        dispatch({ type: 'saveLevel', payload: { level, totalMissions } })
    }

    const saveMission = (mission: number | null) => {
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