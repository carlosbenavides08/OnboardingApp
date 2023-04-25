import React, { createContext, useReducer } from 'react'
import { levelReducer, LevelState } from './levelReducer'

type LevelContextProps = {
    worldTitle: string
    levelTitle: string
    level: number | null
    medal: string
    mission: number | null
    totalMissions: number | null
    missions: { title: string, description: string }[]
    missionResponse: string | null
    saveWorldTitle: (worldTitle: string) => void
    saveLevelTitle: (levelTitle: string) => void
    saveMedal: (levelTitle: string) => void
    saveLevel: (level: number | null, totalMissions: number | null) => void
    saveMission: (mission: number | null) => void
    saveMissions: (missions: { title: string, description: string }[]) => void
    saveMissionResponse: (mission: string | null) => void
}

const loginInitialState: LevelState = {
    worldTitle: '',
    levelTitle: '',
    medal: '',
    level: null,
    mission: null,
    totalMissions: null,
    missions: [],
    missionResponse: null,
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

    const saveMedal = (medal: string) => {
        dispatch({ type: 'saveMedal', payload: medal })
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

    const saveMissionResponse = (response: string | null) => {
        dispatch({ type: 'saveMissionResponse', payload: response })
    }

    return (
        <LevelContext.Provider value={{
            ...state,
            saveWorldTitle,
            saveLevelTitle,
            saveMedal,
            saveLevel,
            saveMission,
            saveMissions,
            saveMissionResponse
        }}>
            { children }
        </LevelContext.Provider>
    )
}