import React from 'react'
import { Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import { World } from '../components/World';

import { stylesHome } from '../styles'

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'>{}

export const HomeScreen = ({ navigation }: Props) => {
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
                        <Text style={ stylesHome.hello }>HOLA, </Text>
                        <Text style={ stylesHome.name }>CYNTHIA</Text>
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
                            wonMedals='0'
                            totalMedals='11'
                            navigation={ navigation }
                        />
                        <World
                            title='MUNDO CRECE'
                            description='Te guiamos para que sigas desarrollándote en UPC.'
                            image='world-grows'
                            wonMedals='0'
                            totalMedals='11'
                            enable={ false }
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
