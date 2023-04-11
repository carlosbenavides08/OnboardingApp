import React, { useContext, useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import { Level } from '../components/Level'
import { Header } from '../components/Header'

import { stylesLevels } from '../styles'

import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setLevels } from '../redux/slices/user'
import { loadLevelsBack } from '../hooks/loadData'
import { BottomSheetMessage } from '../components/BottomSheetMessage'
import { stylesBottomSheetMessage } from '../styles/bottomSheetMessage'
import { LevelContext } from '../context/LevelContext'

interface Props extends StackScreenProps<RootStackParams, 'LevelsScreen'>{}

export const LevelsScreen = ({ navigation }: Props) => {
    const dispatch = useAppDispatch()
    const { levels } = useAppSelector((state) => state.userReducer)

    const { worldTitle } = useContext(LevelContext)
    
    const [medals, setMedals] = useState(0)
    const [date, setDate] = useState('')
    const [activeMessage, setActiveMessage] = useState(false)

    useEffect(() => {
        loadLevels()
    }, [])

    useEffect(() => {
        const date = new Date()
        const year = date.getFullYear()
        const month = date.getMonth() < 10 ? `0${ date.getMonth() + 1 }` : date.getMonth()
        const day = date.getDate() < 10 ? `0${ date.getDate() }` : date.getDate()

        setDate(`${ year }-${ month }-${ day }`)
    }, [])

    useEffect(() => {
        let count = 0
        levels.map(level => {
            if (level.status === 'COMPLETED') {
                count++
            }
        })
        setMedals(count)
    }, [levels])

    const loadLevels = async() => {
        const levels = await loadLevelsBack()
        dispatch(setLevels(levels!))
    }

    return (
        <SafeAreaView style={ stylesLevels.levelsContainer }>
            <ScrollView>
                <Header
                    title={ worldTitle }
                    navigation={ navigation }
                />
                <View style={ stylesLevels.hero }>
                    <Image
                        source={ require('../assets/hero-world.png') }
                        style={ stylesLevels.imageHero }
                    />
                    <View style={ stylesLevels.starsWrapper }>
                        <Image
                            source={ require('../assets/star.png') }
                            style={ stylesLevels.imageStar }
                        />
                        <Text style={ stylesLevels.starsCount }>
                            { medals }
                            <Text style={ stylesLevels.starsTotal }>/10 Medallas</Text>
                        </Text>
                    </View>
                </View>
                <View style={ stylesLevels.bodyContainer }>
                    <View style={ stylesLevels.roadMap }>
                        <Image
                            source={ require('../assets/roadmap.png') }
                            style={{ width: 230, height: 1415 }}
                        />
                        <Image
                            source={ require('../assets/rocket.png') }
                            style={{ position: 'absolute', top: 60, right: 70, width: 40, height: 22 }}
                        />
                        <Image
                            source={ require('../assets/rocket.png') }
                            style={{ position: 'absolute', top: 770, right: 30, width: 40, height: 22, transform: [{ rotate: '10deg' }] }}
                        />
                        <Image
                            source={ require('../assets/rocket.png') }
                            style={{ position: 'absolute', top: 610, left: 30, width: 40, height: 22, transform: [{ rotate: '120deg' }] }}
                        />
                        <Image
                            source={ require('../assets/rocket.png') }
                            style={{ position: 'absolute', top: 1250, left: 40, width: 40, height: 22, transform: [{ rotate: '120deg' }] }}
                        />
                        <Image
                            source={ require('../assets/rocket.png') }
                            style={{ position: 'absolute', top: 1410, right: 30, width: 40, height: 22 }}
                        />

                        <Image
                            source={ require('../assets/star-roadmap.png') }
                            style={{ position: 'absolute', top: 280, left: 20, width: 30, height: 30 }}
                        />
                        <Image
                            source={ require('../assets/star-roadmap.png') }
                            style={{ position: 'absolute', top: 460, right: 5, width: 30, height: 30 }}
                        />
                        <Image
                            source={ require('../assets/star-roadmap.png') }
                            style={{ position: 'absolute', top: 920, left: 40, width: 30, height: 30 }}
                        />
                        <Image
                            source={ require('../assets/star-roadmap.png') }
                            style={{ position: 'absolute', top: 1090, right: 5, width: 30, height: 30 }}
                        />
                        <Image
                            source={ require('../assets/star-roadmap.png') }
                            style={{ position: 'absolute', top: 1560, left: 40, width: 30, height: 30 }}
                        />
                        <Image
                            source={ require('../assets/star-roadmap.png') }
                            style={{ position: 'absolute', top: 1780, right: 50, width: 30, height: 30 }}
                        />

                        <Level
                            levelStyle={ stylesLevels.level1 }
                            number={ 1 }
                            levelTitle='Nivel 1'
                            levelDescription='INICIA TU PRIMER CICLO'
                            medal='El gran inicio'
                            completedMissions={ levels.find(level => level.numberLevel! === 1)?.completedMissions!.toString() }
                            totalMissions={ levels.find(level => level.numberLevel! === 1)?.totalMissions }
                            setActiveMessage={ setActiveMessage }
                            navigation={ navigation }
                        />
                        <Level
                            levelStyle={ stylesLevels.level2 }
                            number={ 2 }
                            levelTitle='Nivel 2'
                            levelDescription='CONOCE INFORMACIÓN CLAVE PARA TUS CLASES Y LA UNIVERSIDAD'
                            medal='No lo pierdas de vista'
                            completedMissions={ levels.find(level => level.numberLevel! === 2)?.completedMissions!.toString() }
                            totalMissions={ levels.find(level => level.numberLevel! === 2)?.totalMissions }
                            enable={ levels.find(level => level.numberLevel! === 1)?.completedMissions! === levels.find(level => level.numberLevel! === 1)?.totalMissions! && new Date(levels.find(level => level.numberLevel! === 2)?.startDate!) <= new Date(date) }
                            setActiveMessage={ setActiveMessage }
                            navigation={ levels.find(level => level.numberLevel! === 1)?.completedMissions! === levels.find(level => level.numberLevel! === 1)?.totalMissions! ? navigation : undefined }
                        />
                        <Level
                            levelStyle={ stylesLevels.level3 }
                            number={ 3 }
                            levelTitle='Nivel 3'
                            levelDescription='INTÉGRATE A LAS ACTIVIDADES CULTURALES'
                            medal='Me divierto en UPC I'
                            completedMissions={ levels.find(level => level.numberLevel! === 3)?.completedMissions!.toString() }
                            totalMissions={ levels.find(level => level.numberLevel! === 3)?.totalMissions }
                            enable={ levels.find(level => level.numberLevel! === 2)?.completedMissions! === levels.find(level => level.numberLevel! === 2)?.totalMissions! && new Date(levels.find(level => level.numberLevel! === 3)?.startDate!) <= new Date(date) }
                            setActiveMessage={ setActiveMessage }
                            navigation={ levels.find(level => level.numberLevel! === 2)?.completedMissions! === levels.find(level => level.numberLevel! === 2)?.totalMissions! ? navigation : undefined }
                        />
                        <Level
                            levelStyle={ stylesLevels.level4 }
                            number={ 4 }
                            levelTitle='Nivel 4'
                            levelDescription='RECIBE APOYO PERSONAL Y ACADÉMICO'
                            medal='Creciendo con UPC'
                            completedMissions={ levels.find(level => level.numberLevel! === 4)?.completedMissions!.toString() }
                            totalMissions={ levels.find(level => level.numberLevel! === 4)?.totalMissions }
                            enable={ levels.find(level => level.numberLevel! === 3)?.completedMissions! === levels.find(level => level.numberLevel! === 3)?.totalMissions! && new Date(levels.find(level => level.numberLevel! === 4)?.startDate!) <= new Date(date) }
                            setActiveMessage={ setActiveMessage }
                            navigation={ levels.find(level => level.numberLevel! === 3)?.completedMissions! === levels.find(level => level.numberLevel! === 3)?.totalMissions! ? navigation : undefined }
                        />
                        <Level
                            levelStyle={ stylesLevels.level5 }
                            number={ 5 }
                            levelTitle='Nivel 5'
                            levelDescription='APRENDE CÓMO RESERVAR ESPACIOS EN UPC'
                            medal='Aprovecho mis recursos'
                            completedMissions={ levels.find(level => level.numberLevel! === 5)?.completedMissions!.toString() }
                            totalMissions={ levels.find(level => level.numberLevel! === 5)?.totalMissions }
                            enable={ levels.find(level => level.numberLevel! === 4)?.completedMissions! === levels.find(level => level.numberLevel! === 4)?.totalMissions! && new Date(levels.find(level => level.numberLevel! === 5)?.startDate!) <= new Date(date) }
                            setActiveMessage={ setActiveMessage }
                            navigation={ levels.find(level => level.numberLevel! === 4)?.completedMissions! === levels.find(level => level.numberLevel! === 4)?.totalMissions! ? navigation : undefined }
                        />
                        <Level
                            levelStyle={ stylesLevels.level6 }
                            number={ 6 }
                            levelTitle='Nivel 6'
                            levelDescription='REALIZA TUS EXÁMENES PARCIALES'
                            medal='Fin de parciales'
                            completedMissions={ levels.find(level => level.numberLevel! === 6)?.completedMissions!.toString() }
                            totalMissions={ levels.find(level => level.numberLevel! === 6)?.totalMissions }
                            enable={ new Date(levels.find(level => level.numberLevel! === 6)?.startDate!) <= new Date(date) }
                            // enable={ true }
                            setActiveMessage={ setActiveMessage }
                            navigation={ new Date(levels.find(level => level.numberLevel! === 6)?.startDate!) <= new Date(date) ? navigation : undefined }
                            // navigation={ navigation }
                        />
                        <Level
                            levelStyle={ stylesLevels.level7 }
                            number={ 7 }
                            levelTitle='Nivel 7'
                            levelDescription='INTÉGRATE CON LAS ACTIVIDADES DE UPC'
                            enable={ false }
                            subsequent
                            setActiveMessage={ setActiveMessage }
                        />
                        <Level
                            levelStyle={ stylesLevels.level8 }
                            number={ 8 }
                            levelTitle='Nivel 8'
                            levelDescription='REFUERZA Y POTENCIA TUS CONOCIMIENTOS'
                            enable={ false }
                            subsequent
                            setActiveMessage={ setActiveMessage }
                        />
                        <Level
                            levelStyle={ stylesLevels.level9 }
                            number={ 9 }
                            levelTitle='Nivel 9'
                            levelDescription='PREPÁRATE PARA CULMINAR TU 1° CICLO'
                            enable={ false }
                            subsequent
                            setActiveMessage={ setActiveMessage }
                        />
                        <Level
                            levelStyle={ stylesLevels.level10 }
                            number={ 10 }
                            levelTitle='Nivel 10'
                            levelDescription='REALIZA TUS EVALUACIONES FINALES'
                            enable={ false }
                            subsequent
                            setActiveMessage={ setActiveMessage }
                        />
                    </View>
                    <View style={ stylesLevels.goalWrapper }>
                        <Image
                            source={ require('../assets/goal.png') }
                            style={{ width: 64, height: 64 }}
                        />
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                <Image
                                    source={ require('../assets/level-lock.png') }
                                    style={{ width: 16, height: 16 }}
                                />
                                <Text style={ stylesLevels.goalTitle }>TU META</Text>
                            </View>
                            <Text style={ stylesLevels.goalDescription }>¡Termina con éxito tu primer ciclo!</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <BottomSheetMessage
                activeMessage={ activeMessage }
                setActiveMessage={ setActiveMessage }
                title='SIGUIENTE NIVEL BLOQUEADO'
            >
                <View style={ stylesBottomSheetMessage.body }>
                    <Image
                        source={ require('../assets/locked-level.png') }
                        style={{ width: 80, height: 80, alignSelf: 'center' }}
                    />
                    <Text style={{
                        color: '#42526A',
                        fontFamily: 'WhitneyHTF-Medium',
                        fontSize: 14,
                        lineHeight: 20,
                        marginTop: 16
                    }}>
                        Asegúrate de completar todas las misiones del nivel anterior para desbloquear este nivel o espera a que en las siguientes semanas
                        activemos nuevos niveles del Mundo Inicia.
                    </Text>
                    <TouchableOpacity
                        activeOpacity={ 1 }
                        style={ stylesBottomSheetMessage.button }
                        onPress={ () => setActiveMessage(false) }
                    >
                        <Text style={ stylesBottomSheetMessage.buttonText }>Volver al mapa</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheetMessage>
            {
                activeMessage && (
                    <View style={ stylesLevels.missionContainerLocked }></View>
                )
            }
        </SafeAreaView>
    )
}
