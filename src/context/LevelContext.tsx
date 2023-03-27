import React, { createContext, useReducer } from 'react'
import { levelReducer, LevelState } from './levelReducer'

type LevelContextProps = {
    levelTitle: string
    level: number | null
    mission: number | null
    totalMissions: number | null
    missions: { title: string, description: string }[]
    saveLevelTitle: (levelTitle: string) => void
    saveLevel: (level: number | null, totalMissions: number | null) => void
    saveMission: (mission: number | null) => void
    saveMissions: (missions: { title: string, description: string }[]) => void
}

const loginInitialState: LevelState = {
    levelTitle: '',
    level: null,
    mission: null,
    totalMissions: null,
    missions: [],
}

export const LevelContext = createContext({} as LevelContextProps)

export const LevelProvider = ({ children }: any) =>  {

    const [state, dispatch] = useReducer(levelReducer, loginInitialState)

    const saveLevelTitle = (levelTitle: string) => {
        dispatch({ type: 'saveLevelTitle', payload: levelTitle })
    }

    const saveLevel = (level: number | null, totalMissions: number | null) => {
        dispatch({ type: 'saveLevel', payload: { level, totalMissions } })
    }

    const saveMission = (mission: number | null) => {
        dispatch({ type: 'saveMission', payload: mission })
    }

    const saveMissions = (missions: { title: string, description: string }[]) => {
        dispatch({ type: 'saveMissions', payload: missions })
    }

    return (
        <LevelContext.Provider value={{
            ...state,
            saveLevelTitle,
            saveLevel,
            saveMission,
            saveMissions
        }}>
            { children }
        </LevelContext.Provider>
    )
}