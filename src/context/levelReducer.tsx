export interface LevelState {
    worldTitle: string
    levelTitle: string
    level: number | null
    mission: number | null
    totalMissions: number | null
    missions: { title: string, description: string }[]
}

type LevelAction =
    | { type: 'saveWorldTitle', payload: string }
    | { type: 'saveLevelTitle', payload: string }
    | { type: 'saveLevel', payload: { level: number | null, totalMissions: number | null } }
    | { type: 'saveMission', payload: number | null }
    | { type: 'saveMissions', payload: { title: string, description: string }[] }

export const levelReducer = (state: LevelState, action: LevelAction): LevelState => {
    switch (action.type) {
        case 'saveWorldTitle':
            return {
                ...state,
                worldTitle: action.payload,
            }
        case 'saveLevelTitle':
            return {
                ...state,
                levelTitle: action.payload,
            }
        case 'saveLevel':
            return {
                ...state,
                level: action.payload.level,
                totalMissions: action.payload.totalMissions,
            }
        case 'saveMission':
            return {
                ...state,
                mission: action.payload,
            }
        case 'saveMissions':
            return {
                ...state,
                missions: [...action.payload],
            }
    }
}