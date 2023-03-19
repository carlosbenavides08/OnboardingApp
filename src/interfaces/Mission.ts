// export interface Mission {
//     numberMission: number
//     level: 1
//     studentCode: string
//     response: string
//     score: number
// }

export interface Mission {
    data: Datum[];
}

export interface Datum {
    missionId: string;
    levelId:   string;
    id:        string;
    data:      Data;
}

export interface Data {
    numberLevel?:       number;
    name?:              string;
    medal?:             string;
    totalMissions?:     number;
    status?:            string;
    completedMissions?: number;
    startDate?:         string;
    numberMission?:     number;
    level?:             number;
    studentCode?:       string;
    response?:          string;
    score?:             number;
}
