import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import { World } from '../components/World';

import { stylesHome } from '../styles'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mundoApi from '../api/mundoApi';
import { User } from '../interfaces/User';
import { setLevels } from '../redux/slices/user';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{}

export const HomeScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch()
    const { levels } = useAppSelector((state) => state.userReducer)

    const [name, setName] = useState('')

    useEffect(() => {
        loadLevels()
    }, [])

    useEffect(() => {
        getName()
    }, [])

    const getName = async() => {
        const storageName = await AsyncStorage.getItem('name')
        // const firstName = storageName?.split(' ')
        setName(storageName!)
    }

    const loadLevels = async() => {
        try {
            const user = await AsyncStorage.getItem('studentCode')
            const { data } = await mundoApi.post<User>('/auth/login', { studentCode: user })
            const levels = data.data.map(level => level.data)
            dispatch(setLevels(levels))
        } catch (error) {
            console.log(error)
        }
    }

    const [medals, setMedals] = useState(0)

    useEffect(() => {
        let count = 0
        levels.map(level => {
            if (level.status === 'COMPLETED') {
                count++
            }
        })
        setMedals(count)
    }, [levels])

    return (
        <SafeAreaView style={ stylesHome.homeContainer }>
            <ScrollView>
                <View style={ stylesHome.header }>
                    <View style={ stylesHome.headerWrapper }>
                        <Text style={ stylesHome.headerText }>MI MUNDO UPC</Text>
                    </View>
                    <View style={ stylesHome.separatorHeader }></View>
                    <Image
                        source={ require('../assets/logo.png') }
                        style={ stylesHome.logo }
                    />
                </View>
                <View style={ stylesHome.body }>
                    <View style={ stylesHome.helloWrapper }>
                        <Text style={ stylesHome.hello }>HOLA, <Text style={ stylesHome.name }>{ name }</Text></Text>
                    </View>
                    <Text style={ stylesHome.generalDescription }>
                        Completa las misiones de cada nivel, gana medallas de reconocimiento y descubre 
                        <Text style={ stylesHome.nameApp }> Mi mundo UPC.</Text>
                    </Text>
                    <View style={ stylesHome.listContainer }>
                        <World
                            title='MUNDO INICIA'
                            description='Te acompañamos durante tu primer ciclo.'
                            image='world-begins'
                            wonMedals={ medals.toString() }
                            totalMedals='10'
                            navigation={ navigation }
                        />
                        <World
                            title='MUNDO CRECE'
                            description='Te guiamos para que sigas desarrollándote en UPC.'
                            image='world-grows'
                            wonMedals={ medals.toString() }
                            totalMedals='11'
                            enable={ false }
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
