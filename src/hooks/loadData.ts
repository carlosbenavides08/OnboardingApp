import AsyncStorage from "@react-native-async-storage/async-storage"
import mundoApi from '../api/mundoApi';
import { Mission } from "../interfaces/Mission";
import { User } from "../interfaces/User";

const loadLevelsBack = async() => {
    try {
        const user = await AsyncStorage.getItem('user')
        const { data } = await mundoApi.post<User>('/auth/login', { studentCode: user })
        const levels = data.data.map(level => level.data)
        return levels
    } catch (error) {
        console.log(error)
    }
}

const loadMissionsBack = async(level: number) => {
    try {
        const user = await AsyncStorage.getItem('studentCode')
        const { data } = await mundoApi.post<Mission>('/level/list-mission', { studentCode: user, numberLevel: level })
        const missions = data.data.map(mission => mission)
        return missions
    } catch (error) {
        console.log(error)
    }
}

export {
    loadLevelsBack,
    loadMissionsBack,
}