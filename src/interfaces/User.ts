// export interface User {
//     id: string
//     levelId: string
//     missionId?: string
//     data: string
// }


// Generated by https://quicktype.io

export interface User {
    status: number
    data:   Datum[]
}

export interface Datum {
    missionId?: string
    id:         string
    levelId:    string
    data:       Data
}

export interface Data {
    numberLevel?:       number
    name?:              string
    lastName?:          string
    medal?:             string
    totalMissions?:     number
    status?:            Status
    completedMissions?: number
    startDate?:         string
    studentCode?:       string
    phone?:             string
    email?:             string
    career?:            string
    campus?:            string
}

type Status = 
    | 'PENDING'
    | 'PROGRESS'
    | 'COMPLETED'

