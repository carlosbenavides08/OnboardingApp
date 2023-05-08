import React, { useEffect, useState } from 'react'
import { Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setLevels } from '../redux/slices/user'
import { loadLevelsBack } from '../hooks/loadData'

import { World } from '../components/World'

import { stylesHome } from '../styles'

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
        setName(storageName!)
    }

    const loadLevels = async() => {
        const levels = await loadLevelsBack()
        dispatch(setLevels(levels!))
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

    const [updateApp, setUpdateApp] = useState(false)

    useEffect(() => {
        
    }, [])

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
