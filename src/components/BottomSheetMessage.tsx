import React, { useEffect, useRef } from 'react'
import { Animated, Image, Text, TouchableOpacity, View } from 'react-native'
import { stylesBottomSheetMessage } from '../styles/bottomSheetMessage'

interface Props {
    children: JSX.Element
    activeMessage: boolean
    setActiveMessage: React.Dispatch<React.SetStateAction<boolean>>
    title: string
}

export const BottomSheetMessage = ({ children, activeMessage = false, setActiveMessage, title }: Props) => {
    const slideBottomSheet = useRef(new Animated.Value(1000)).current

    const slide = () => {
        Animated.timing(
            slideBottomSheet,
            {
                toValue: 0,
                duration: 200,
                useNativeDriver: true
            }
        ).start()
    }

    const hide = () => {
        Animated.timing(
            slideBottomSheet,
            {
                toValue: 1000,
                duration: 200,
                useNativeDriver: true
            }
        ).start()
    }

    useEffect(() => {
        if (activeMessage) {
            slide()
        } else {
            hide()
        }
    }, [activeMessage])

    return (
        <Animated.View style={[
            stylesBottomSheetMessage.contaner,
            {
                transform: [{
                    translateY: slideBottomSheet
                }]
            }
        ]}>
            <View style={ stylesBottomSheetMessage.header }>
                <Text style={{ color: 'black', fontFamily: 'SolanoGothicMVB-Bd', fontSize: 20, lineHeight: 32 }}>{ title }</Text>
                <TouchableOpacity
                    activeOpacity={ 1 }
                    style={ stylesBottomSheetMessage.circleClose }
                    onPress={ () => setActiveMessage(false) }
                >
                    <Image
                        source={ require('../assets/ic-sm-error.png') }
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
            { children }
        </Animated.View>
    )
}
