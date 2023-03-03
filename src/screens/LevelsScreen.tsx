import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import { Level } from '../components/Level'

import { stylesLevels } from '../styles'
import { Header } from '../components/Header'

interface Props extends StackScreenProps<RootStackParams, 'LevelsScreen'>{}

export const LevelsScreen = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={ stylesLevels.levelsContainer }>
            <ScrollView>
                <Header title='MUNDO PREPÁRATE'/>
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
                        <Text style={ stylesLevels.starsCount }>0<Text style={ stylesLevels.starsTotal }>/11 Medallas</Text></Text>
                    </View>
                </View>
                <View style={ stylesLevels.bodyContainer }>
                    <View style={ stylesLevels.roadMap }>
                        <Image
                            source={ require('../assets/roadmap.png') }
                            style={{ width: 230, height: 1576 }}
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
                            levelTitle='Nivel 1'
                            levelDescription='INICIA TU PRIMER CICLO'
                            completedMissions='0'
                            totalMissions='3'
                            navigation={ navigation }
                        />
                        <Level
                            levelStyle={ stylesLevels.level2 }
                            levelTitle='Nivel 2'
                            levelDescription='RESUELVE DUDAS DE TUS CLASES Y DE LA UNIVERSIDAD'
                            completedMissions='0'
                            totalMissions='3'
                            enable={ false }
                        />
                        <Level
                            levelStyle={ stylesLevels.level3 }
                            levelTitle='Nivel 3'
                            levelDescription='ENTRÉGATE A LA CULTURA UPC PARTE 1'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level4 }
                            levelTitle='Nivel 4'
                            levelDescription='RECIBE APOYO PERSONAL Y ACADÉMICO'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level5 }
                            levelTitle='Nivel 5'
                            levelDescription='APRENDE CÓMO RESERVAR ESPACIOS EN UPC'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level6 }
                            levelTitle='Nivel 6'
                            levelDescription='CONOCE MÁS TRÁMITES UNIVERSITARIOS'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level7 }
                            levelTitle='Nivel 7'
                            levelDescription='REALIZA TUS EXÁMENES PARCIALES'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level8 }
                            levelTitle='Nivel 8'
                            levelDescription='ENTRÉGATE A LA CULTURA UPC PARTE 2'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level9 }
                            levelTitle='Nivel 9'
                            levelDescription='REFUERZA Y POTENCIA TUS CONOCIMIENTOS'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level10 }
                            levelTitle='Nivel 10'
                            levelDescription='PREPÁRATE PARA CULMINAR TU 1° CICLO'
                            enable={ false }
                            subsequent
                        />
                        <Level
                            levelStyle={ stylesLevels.level11 }
                            levelTitle='Nivel 11'
                            levelDescription='REALIZA TUS EXÁMENES FINALES'
                            enable={ false }
                            subsequent
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
        </SafeAreaView>
    )
}
