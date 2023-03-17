import React, { useContext, useEffect, useRef } from 'react'
import { Animated, Image, Text, View, TouchableOpacity } from 'react-native';
import { LevelContext } from '../context/LevelContext';

import { stylesBottomSheetCongrats } from '../styles'

interface Props {
    missionCompleted: boolean
    setMissionCompleted: React.Dispatch<React.SetStateAction<boolean>>
    setActiveBottomSheet: React.Dispatch<React.SetStateAction<boolean>>
}

export const BottomSheetCongrats = ({ missionCompleted, setMissionCompleted, setActiveBottomSheet }: Props) => {

    const { level, mission, totalMissions } = useContext(LevelContext)

    const slideBottomSheet = useRef(new Animated.Value(350)).current

    const slide = () => {
        Animated.timing(
            slideBottomSheet,
            {
                toValue: -280,
                duration: 200,
                useNativeDriver: true
            }
        ).start()
    }

    const hide = () => {
        Animated.timing(
            slideBottomSheet,
            {
                toValue: 350,
                duration: 200,
                useNativeDriver: true
            }
        ).start()
    }

    useEffect(() => {
        if (missionCompleted) {
            slide()
        } else {
            hide()
        }
    }, [missionCompleted])

    const handleClose = () => {
        setMissionCompleted(false)
        setActiveBottomSheet(false)
    }

    return (
        <Animated.View style={[
            stylesBottomSheetCongrats.contaner,
            {
                transform: [{
                    translateY: slideBottomSheet
                }]
            }
        ]}>
            <View style={ stylesBottomSheetCongrats.header }>
                <View></View>
                <TouchableOpacity
                    activeOpacity={ 1 }
                    style={ stylesBottomSheetCongrats.circleClose }
                    onPress={ handleClose }
                >
                    <Image
                        source={ require('../assets/ic-sm-error.png') }
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
            <View style={ stylesBottomSheetCongrats.body }>
                <Text style={ stylesBottomSheetCongrats.levelText }>Nivel { level }</Text>
                {
                    mission === totalMissions
                    ? (
                        <Image
                            source={ require('../assets/level-completed.png') }
                            style={{ width: 272, height: 148 }}
                        />
                    ) : (
                        <Image
                            source={ require('../assets/mission-completed.png') }
                            style={{ width: 272, height: 148 }}
                        />
                    )
                }
            </View>
        </Animated.View>
    )
}
