import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import { stylesBottomSheet } from '../styles'

interface Props {
    activeBottomSheet: boolean
    children: JSX.Element
}

export const BottomSheet = ({ activeBottomSheet = false, children }: Props) => {
    const slideBottomSheet = useRef(new Animated.Value(350)).current

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
                toValue: 350,
                duration: 200,
                useNativeDriver: true
            }
        ).start()
    }

    useEffect(() => {
        if (activeBottomSheet) {
            slide()
        } else {
            hide()
        }
    }, [activeBottomSheet])

    return (
        <Animated.View style={[
            stylesBottomSheet.contaner,
            {
                transform: [{
                    translateY: slideBottomSheet
                }]
            }
        ]}>
            { children }
        </Animated.View>
    )
}
