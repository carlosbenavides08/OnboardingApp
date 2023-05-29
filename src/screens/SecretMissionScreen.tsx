import React, { useContext, useState } from 'react'
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigator/Navigator'

import { LevelContext } from '../context/LevelContext'
import { HeaderSecretMission } from '../components/HeaderSecretMission'

import { stylesMission, stylesBottomSheet } from '../styles'
import { InstructionsSecretMission1 } from '../components/worldOne/secretMissions/MissionOne/Instructions'
import { InstructionsSecretMission2 } from '../components/worldOne/secretMissions/MissionTwo/Instructions'
import { SecretMissionOne } from '../components/worldOne/secretMissions/MissionOne/SecretMissionOne'
import { SecretMissionTwo } from '../components/worldOne/secretMissions/MissionTwo/SecretMissionTwo'

import { BottomSheet } from '../components/BottomSheet'
import { BottomSheetCongrats } from '../components/BottomSheetCongrats'
import { QualifyMission } from '../components/QualifyMission'
import { FinishedMission } from '../components/FinishedMission'

interface Props extends StackScreenProps<RootStackParams, 'SecretMissionScreen'>{}

export const SecretMissionScreen = ({ route, navigation }: Props) => {
    const { level, mission, levelTitle, missions } = useContext(LevelContext)

    const [activeBottomSheet, setActiveBottomSheet] = useState(false)
    const [showQuestion, setShowQuestion] = useState(false)
    const [qualify, setQualify] = useState(false)
    const [missionCompleted, setMissionCompleted] = useState(false)

    const slide = () => {
        setActiveBottomSheet(!activeBottomSheet)
        setShowQuestion(true)
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
        >
            <SafeAreaView style={ stylesMission.missionContainer }>
                <ScrollView>
                    <HeaderSecretMission
                        title={ route.params.title }
                        navigation={ navigation }
                    />
                    <View style={ stylesMission.textHeaderWrapper }>
                        <Text style={ stylesMission.textHeader }>
                            {
                                route.params.description
                            }
                        </Text>
                    </View>
                    <View style={ stylesMission.missionsBody }>
                        {
                            (level === 11 && mission === 1) && (
                                <InstructionsSecretMission1
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 12 && mission === 1) && (
                                <InstructionsSecretMission2
                                    slide={ slide }
                                />
                            )
                        }
                    </View>
                </ScrollView>
                <BottomSheet
                    activeBottomSheet={ activeBottomSheet }
                    height={
                        (level === 11 && mission === 1 && !qualify && !missionCompleted) ? 400
                        : 330
                    }
                >
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
                                    {
                                        !qualify && (
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
                                        )
                                    }
                                </View>
                            )
                        }
                        <View style={ stylesBottomSheet.body }>
                            {
                                (showQuestion && level === 11) && (
                                    <SecretMissionOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 12) && (
                                    <SecretMissionTwo
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
        </KeyboardAvoidingView>
    )
}
