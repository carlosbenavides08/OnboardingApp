import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { stylesHeader } from '../styles/header'

interface Props {
    title: string
}

export const Header = ({ title }: Props) => {
    const navigation = useNavigation()

    return (
        <View style={ stylesHeader.header }>
            <TouchableOpacity
                onPress={ () => navigation.goBack() }
                activeOpacity={ 1 }
            >
                <Image
                    source={ require('../assets/back-icon.png') }
                    style={{ width: 32, height: 32 }}
                />
            </TouchableOpacity>
            <Text style={ stylesHeader.headerText }>{ title }</Text>
        </View>
    )
}
