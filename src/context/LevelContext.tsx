import React, { createContext, useReducer } from 'react'
import { levelReducer, LevelState } from './levelReducer'

type LevelContextProps = {
    worldTitle: string
    levelTitle: string
    level: number | null
    mission: number | null
    totalMissions: number | null
    missions: { title: string, description: string }[]
    saveWorldTitle: (worldTitle: string) => void
    saveLevelTitle: (levelTitle: string) => void
    saveLevel: (level: number | null, totalMissions: number | null) => void
    saveMission: (mission: number | null) => void
    saveMissions: (missions: { title: string, description: string }[]) => void
}

const loginInitialState: LevelState = {
    worldTitle: '',
    levelTitle: '',
    level: null,
    mission: null,
    totalMissions: null,
    missions: [],
}

export const LevelContext = createContext({} as LevelContextProps)

export const LevelProvider = ({ children }: any) =>  {

    const [state, dispatch] = useReducer(levelReducer, loginInitialState)

    const saveWorldTitle = (worldTitle: string) => {
        dispatch({ type: 'saveWorldTitle', payload: worldTitle })
    }

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
            saveWorldTitle,
            saveLevelTitle,
            saveLevel,
            saveMission,
            saveMissions
        }}>
            { children }
        </LevelContext.Provider>
    )
}