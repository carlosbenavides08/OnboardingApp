import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

import { stylesBottomSheet } from '../styles/bottomSheet'

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
                duration: 700,
                useNativeDriver: true
            }
        ).start()
    }

    useEffect(() => {
        if (activeBottomSheet) {
            slide()
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
