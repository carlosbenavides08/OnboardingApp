import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
// import { StackScreenProps } from '@react-navigation/stack'
// import { RootStackParams } from '../navigator/Navigator'

import { stylesHome } from '../styles'

// interface Props extends StackScreenProps<RootStackParams, 'TabsHome'>{}

export const HomeScreen = () => {

    // const { name } = route.params

    return (
        <>
        
            <ScrollView style={ stylesHome.homeContainer }>
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
                        <View style={ stylesHome.missionCard }>
                            <View style={ stylesHome.imageBackground }>
                                <Image
                                    source={ require('../assets/world-begins.png') }
                                    style={ stylesHome.imageWorld }
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={ stylesHome.missionTitle }>MUNDO INICIA</Text>
                                <Text style={ stylesHome.missionDescription }>Te acompañamos durante tu primer ciclo.</Text>
                                <View style={ stylesHome.starsWrapper }>
                                    <Image
                                        source={ require('../assets/star.png') }
                                        style={ stylesHome.imageStar }
                                    />
                                    <Text style={ stylesHome.starsCount }>0<Text style={ stylesHome.starsTotal }>/9 Medallas</Text></Text>
                                </View>
                            </View>
                        </View>
                        <View style={[ stylesHome.missionCard, stylesHome.missionCardDisabled ]}>
                            <View style={[ stylesHome.imageBackground, stylesHome.imageBackgroundDisabled ]}>
                                <Image
                                    source={ require('../assets/world-grows.png') }
                                    style={ stylesHome.imageWorld }
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text style={ stylesHome.missionTitle }>MUNDO CRECE</Text>
                                <Text style={ stylesHome.missionDescription }>Te guiamos para que sigas desarrollándote en UPC.</Text>
                                <View style={ stylesHome.levelsWrapper }>
                                    <Image
                                        source={ require('../assets/level-lock.png') }
                                        style={ stylesHome.imageStar }
                                    />
                                    <Text style={ stylesHome.levelsCount }>8 Niveles</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}
