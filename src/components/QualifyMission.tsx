import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useContext, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import mundoApi from '../api/mundoApi'
import { LevelContext } from '../context/LevelContext'
import { useAppDispatch } from '../redux/hooks'
import { finish } from '../redux/slices/mission'

import { stylesQualifyMission } from '../styles'

interface Props {
    setMissionCompleted: React.Dispatch<React.SetStateAction<boolean>>
    setQualify: React.Dispatch<React.SetStateAction<boolean>>
}

export const QualifyMission = ({ setMissionCompleted, setQualify }: Props) => {
    const dispatch = useAppDispatch()
    const [stars, setStars] = useState(0)
    const { level, mission, saveMissionResponse, missionResponse } = useContext(LevelContext)

    const handleQualify = (score: number) => {
        setStars(score)
    }

    const handleSend = async() => {
        try {
            const studentCode = await AsyncStorage.getItem('user')
            const sendData = {
                studentCode,
                numberLevel: level,
                numberMission: mission,
                response: missionResponse ? missionResponse : 'respuesta completa',
                score: stars,
            }

            await mundoApi.post('/level/complete-mission', sendData)
            dispatch(finish(sendData))
            
            setMissionCompleted(true)
            setQualify(false)
            saveMissionResponse(null)
        } catch (error: any) {
            console.log('QUALIFY: ', error)
        }
    }

    return (
        <View>
            <Text style={ stylesQualifyMission.title }>
                ¿Qué tan importante consideras esta información para tu vida universitaria?
            </Text>
            <View style={ stylesQualifyMission.container }>
                <View style={ stylesQualifyMission.starsContainer }>
                    {
                        stars > 0 ? (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(0) }
                            >
                                <Image
                                    source={ require('../assets/star-selected.png') }
                                    style={{ width: 56, height: 56 }}
                                    
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(1) }
                            >
                                <Image
                                    source={ require('../assets/star-unselected.png') }
                                    style={{ width: 56, height: 56 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                    {
                        stars > 1 ? (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(1) }
                            >
                                <Image
                                    source={ require('../assets/star-selected.png') }
                                    style={{ width: 56, height: 56 }}
                                    
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(2) }
                            >
                                <Image
                                    source={ require('../assets/star-unselected.png') }
                                    style={{ width: 56, height: 56 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                    {
                        stars > 2 ? (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(2) }
                            >
                                <Image
                                    source={ require('../assets/star-selected.png') }
                                    style={{ width: 56, height: 56 }}
                                    
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(3) }
                            >
                                <Image
                                    source={ require('../assets/star-unselected.png') }
                                    style={{ width: 56, height: 56 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                    {
                        stars > 3 ? (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(3) }
                            >
                                <Image
                                    source={ require('../assets/star-selected.png') }
                                    style={{ width: 56, height: 56 }}
                                    
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(4) }
                            >
                                <Image
                                    source={ require('../assets/star-unselected.png') }
                                    style={{ width: 56, height: 56 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                    {
                        stars > 4 ? (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(4) }
                            >
                                <Image
                                    source={ require('../assets/star-selected.png') }
                                    style={{ width: 56, height: 56 }}
                                    
                                />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={ 1 }
                                onPress={ () => handleQualify(5) }
                            >
                                <Image
                                    source={ require('../assets/star-unselected.png') }
                                    style={{ width: 56, height: 56 }}
                                />
                            </TouchableOpacity>
                        )
                    }
                </View>
                <View style={ stylesQualifyMission.legendContainer }>
                    <Text style={ stylesQualifyMission.legendStartText }>Nada importante</Text>
                    <Text style={ stylesQualifyMission.legendEndText }>Muy importante</Text>
                </View>
            </View>
            <TouchableOpacity
                activeOpacity={ 1 }
                style={[
                    stylesQualifyMission.button,
                    stars === 0 ? stylesQualifyMission.buttonDisabled : null
                ]}
                disabled={ stars === 0 }
                onPress={ handleSend }
            >
                <Text style={[
                    stylesQualifyMission.buttonText,
                    stars === 0 ? stylesQualifyMission.buttonTextDisabled : null
                ]}>Enviar respuesta</Text>
            </TouchableOpacity>
        </View>
    )
}
