import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import { stylesWorld } from '../styles'
import { LevelContext } from '../context/LevelContext'

type ImageName = 
    | 'world-begins'
    | 'world-grows'

interface Props {
    title: string
    description: string
    image: ImageName
    wonMedals: string
    totalMedals: string
    enable?: boolean
    navigation?: StackNavigationProp<RootStackParams, 'HomeScreen'> | undefined
}

export const World = ({ title, description, image, wonMedals, totalMedals, enable = true, navigation }: Props) => {
    const { saveWorldTitle } = useContext(LevelContext)

    const [imageString, setImageString] = useState({
        src: require('../assets/world-begins-enabled.png')
    })

    useEffect(() => {
        setImageName()
    }, [enable])

    const setImageName = () => {
        if (image === 'world-begins') {
            setImageString({
                src: require(`../assets/world-begins-enabled.png`)
            })
        } else if (image === 'world-grows') {
            setImageString({
                src: require(`../assets/world-grows-enabled.png`)
            })

            if (!enable) {
                setImageString({
                    src: require(`../assets/world-grows-disabled.png`)
                })
            }
        }
    }

    const handleGoToLevel = () => {
        if (navigation) {
            saveWorldTitle(title)
            navigation.replace('LevelsScreen')
        }
    }

    return (
        <TouchableOpacity
            style={ stylesWorld.worldCard }
            onPress={ handleGoToLevel }
            activeOpacity={ 1 }
        >
            <View style={[
                stylesWorld.imageBackground,
                !enable ? stylesWorld.imageBackgroundDisabled : null
            ]}>
                <Image
                    source={ imageString.src }
                    style={ stylesWorld.imageWorld }
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={ stylesWorld.worldTitle }>{ title }</Text>
                <Text style={ stylesWorld.worldDescription }>{ description }</Text>
                <View
                    style={[
                        stylesWorld.starsWrapper,
                        !enable ? stylesWorld.starsWrapperDisabled : null
                    ]}
                >
                    {
                        enable
                        ? (
                            <Image
                                source={ require('../assets/star.png') }
                                style={ stylesWorld.imageStar }
                            />
                        ) : (
                            <Image
                                source={ require('../assets/level-lock.png') }
                                style={ stylesWorld.imageStar }
                            />
                        )
                    }
                    {
                        enable
                        ? (
                            <Text style={ stylesWorld.starsCount }>
                                { wonMedals }
                                <Text style={ stylesWorld.starsTotal }>/{ totalMedals } Medallas</Text>
                            </Text>
                        ) : (
                            <Text style={ stylesWorld.levelsText }>Niveles</Text>
                        )
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}
