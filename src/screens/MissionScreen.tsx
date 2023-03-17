import React, { useContext, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { Header } from '../components/Header'
import { RootStackParams } from '../navigator/Navigator'

import { BottomSheet } from '../components/BottomSheet'
import { QualifyMission } from '../components/QualifyMission'
import { MissionOneLevelOne } from '../components/worldOne/levelOne/MissionOne/MissionOne'
import { MissionTwoLevelOne } from '../components/worldOne/levelOne/MissionTwo/MissionTwo'
import { MissionThreeLevelOne } from '../components/worldOne/levelOne/MissionThree/MissionThree'
import { InstructionsLevel1Mission1 } from '../components/worldOne/levelOne/MissionOne/Instructions'
import { InstructionsLevel1Mission2 } from '../components/worldOne/levelOne/MissionTwo/Instructions'
import { InstructionsLevel1Mission3 } from '../components/worldOne/levelOne/MissionThree/Instructions';
import { BottomSheetCongrats } from '../components/BottomSheetCongrats'
import { FinishedMission } from '../components/FinishedMission'
import { LevelContext } from '../context/LevelContext'

import { stylesMission, stylesBottomSheet } from '../styles'

interface Props extends StackScreenProps<RootStackParams, 'MissionScreen'>{}

export const MissionScreen = ({ navigation }: Props) => {

    const [activeBottomSheet, setActiveBottomSheet] = useState(false)
    const [showQuestion, setShowQuestion] = useState(false)
    const [qualify, setQualify] = useState(false)
    const [missionCompleted, setMissionCompleted] = useState(false)

    const { mission } = useContext(LevelContext)

    console.log(mission)

    const slide = () => {
        setActiveBottomSheet(!activeBottomSheet)
        setShowQuestion(true)
    }

    return (
        <>
            <SafeAreaView style={ stylesMission.missionContainer }>
                <ScrollView>
                    <Header title='CONÉCTATE CON LA UNIVERSIDAD' />
                    <View style={ stylesMission.textHeaderWrapper }>
                        <Text style={ stylesMission.textHeader }>
                            Conoce los canales digitales primordiales para comenzar tus clases sin inconvenientes.
                        </Text>
                    </View>
                    <View style={ stylesMission.missionsBody }>
                        {
                            mission === 1 && (
                                <InstructionsLevel1Mission1
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            mission === 2 && (
                                <InstructionsLevel1Mission2
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            mission === 3 && (
                                <InstructionsLevel1Mission3
                                    slide={ slide }
                                />
                            )
                        }
                    </View>
                </ScrollView>
                <BottomSheet activeBottomSheet={ activeBottomSheet }>
                    <>
                        {
                            !missionCompleted && (
                                <View style={ stylesBottomSheet.header }>
                                    {
                                        !qualify ? (
                                            <Text style={ stylesBottomSheet.headerTitle }>COMPLETAR MISIÓN</Text>
                                        ) : (
                                            <View></View>
                                        )
                                    }
                                    <TouchableOpacity
                                        activeOpacity={ 1 }
                                        onPress={ () => {
                                            setActiveBottomSheet(false)
                                            setShowQuestion(true)
                                            setQualify(false)
                                        }}
                                    >
                                        <Image
                                            source={ require('../assets/ic-sm-error.png') }
                                            style={{ width: 24, height: 24 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                        <View style={ stylesBottomSheet.body }>
                            {
                                (showQuestion && mission === 1) && (
                                    <MissionOneLevelOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && mission === 2) && (
                                    <MissionTwoLevelOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && mission === 3) && (
                                    <MissionThreeLevelOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                qualify && (
                                    <QualifyMission
                                        setMissionCompleted={ setMissionCompleted }
                                        setQualify={ setQualify }
                                    />
                                )
                            }
                            {
                                missionCompleted && (
                                    <FinishedMission
                                        navigation={ navigation }
                                    />
                                )
                            }
                        </View>
                    </>
                </BottomSheet>
                {
                    missionCompleted && (
                        <BottomSheetCongrats
                            missionCompleted={ missionCompleted }
                            setMissionCompleted={ setMissionCompleted }
                            setActiveBottomSheet={ setActiveBottomSheet }
                        />
                    )
                }
                {
                    activeBottomSheet && (
                        <View style={ stylesMission.missionContainerLocked }></View>
                    )
                }
            </SafeAreaView>
        </>
    )
}
