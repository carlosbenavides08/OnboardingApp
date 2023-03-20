import AsyncStorage from '@react-native-async-storage/async-storage'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigator/Navigator'
import { useAppDispatch } from '../redux/hooks'
import { notAuth } from '../redux/slices/user'

import { stylesProfile } from '../styles'

interface Props extends StackScreenProps<RootStackParams, 'ProfileScreen'>{}

export const ProfileScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch()

    const [name, setName] = useState('')
    const [career, setCareer] = useState('')

    useEffect(() => {
        load()
    }, [])

    const load = async() => {
        const storageName = await AsyncStorage.getItem('name')
        const storageCareer = await AsyncStorage.getItem('career')
        setName(storageName!)
        setCareer(storageCareer!)
    }

    const handleLogout = async() => {
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('name')
        await AsyncStorage.removeItem('career')

        dispatch(notAuth())

        navigation.replace('LoginScreen')
    }

    return (
        <View style={ stylesProfile.body }>
            <Text style={ stylesProfile.name }>{ name }</Text>
            <Text style={ stylesProfile.career }>{ career }</Text>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={ stylesProfile.button }
                onPress={ handleLogout }
            >
                <View>
                    <Text style={ stylesProfile.buttonText }>
                        Cerrar sesión
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
