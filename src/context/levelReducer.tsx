export interface LevelState {
    level: number | null
    mission: number | null
    totalMissions: number | null
}

type LevelAction =
    | { type: 'saveLevel', payload: { level: number | null, totalMissions: number | null } }
    | { type: 'saveMission', payload: number | null }

export const levelReducer = (state: LevelState, action: LevelAction): LevelState => {
    switch (action.type) {
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
    }
}