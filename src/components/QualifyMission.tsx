import React from 'react'
import { Image, Text, View } from 'react-native'
import { stylesQualifyMission } from '../styles/qualifyMission'

export const QualifyMission = () => {
    return (
        <View>
            <Text style={ stylesQualifyMission.title }>
                ¿Qué tan importante consideras esta información para tu vida universitaria?
            </Text>
            <View style={ stylesQualifyMission.container }>
                <View style={ stylesQualifyMission.starsContainer }>
                    <Image
                        source={ require('../assets/star-unselected.png') }
                        style={{ width: 56, height: 56 }}
                    />
                    <Image
                        source={ require('../assets/star-unselected.png') }
                        style={{ width: 56, height: 56 }}
                    />
                    <Image
                        source={ require('../assets/star-unselected.png') }
                        style={{ width: 56, height: 56 }}
                    />
                    <Image
                        source={ require('../assets/star-unselected.png') }
                        style={{ width: 56, height: 56 }}
                    />
                    <Image
                        source={ require('../assets/star-unselected.png') }
                        style={{ width: 56, height: 56 }}
                    />
                </View>
                <View style={ stylesQualifyMission.legendContainer }>
                    <Text style={ stylesQualifyMission.legendStartText }>Nada importante</Text>
                    <Text style={ stylesQualifyMission.legendEndText }>Muy importante</Text>
                </View>
            </View>
        </View>
    )
}
