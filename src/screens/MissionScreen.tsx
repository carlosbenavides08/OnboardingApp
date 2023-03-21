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
import { InstructionsLevel1Mission3 } from '../components/worldOne/levelOne/MissionThree/Instructions'
import { InstructionsLevel2Mission1 } from '../components/worldOne/levelTwo/MissionOne/Instructions'
import { BottomSheetCongrats } from '../components/BottomSheetCongrats'
import { FinishedMission } from '../components/FinishedMission'
import { LevelContext } from '../context/LevelContext'

import { stylesMission, stylesBottomSheet } from '../styles'
import { MissionOneLevelTwo } from '../components/worldOne/levelTwo/MissionOne/MissionOne';
import { InstructionsLevel2Mission2 } from '../components/worldOne/levelTwo/MissionTwo/Instructions';
import { MissionTwoLevelTwo } from '../components/worldOne/levelTwo/MissionTwo/MissionTwo';
import { InstructionsLevel2Mission3 } from '../components/worldOne/levelTwo/MissionThree/Instructions';

interface Props extends StackScreenProps<RootStackParams, 'MissionScreen'>{}

export const MissionScreen = ({ navigation, route }: Props) => {

    const [activeBottomSheet, setActiveBottomSheet] = useState(false)
    const [showQuestion, setShowQuestion] = useState(false)
    const [qualify, setQualify] = useState(false)
    const [missionCompleted, setMissionCompleted] = useState(false)

    const { level, mission } = useContext(LevelContext)

    const slide = () => {
        setActiveBottomSheet(!activeBottomSheet)
        setShowQuestion(true)
    }

    return (
        <>
            <SafeAreaView style={ stylesMission.missionContainer }>
                <ScrollView>
                    <Header
                        title={
                            route.params.nextMissionTitleBoolean
                            ? `${ (route.params.nextMissionTitle!).length > 35 ? `${ route.params.nextMissionTitle!.substring(0, 35) }...` : route.params.nextMissionTitle }`
                            : `${ (route.params.missionTitle!).length > 35 ? `${ route.params.missionTitle!.substring(0, 35) }...` : route.params.missionTitle }`
                        }
                        levelTitle={ route.params.levelTitle }
                        navigation={ navigation }
                    />
                    <View style={ stylesMission.textHeaderWrapper }>
                        <Text style={ stylesMission.textHeader }>
                            { route.params.description }
                        </Text>
                    </View>
                    <View style={ stylesMission.missionsBody }>
                        {
                            (level === 1 && mission === 1) && (
                                <InstructionsLevel1Mission1
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 1 && mission === 2) && (
                                <InstructionsLevel1Mission2
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 1 && mission === 3) && (
                                <InstructionsLevel1Mission3
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 2 && mission === 1) && (
                                <InstructionsLevel2Mission1
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 2 && mission === 2) && (
                                <InstructionsLevel2Mission2
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 2 && mission === 3) && (
                                <InstructionsLevel2Mission3
                                    slide={ slide }
                                    setQualify={ setQualify }
                                />
                            )
                        }
                    </View>
                </ScrollView>
                <BottomSheet
                    activeBottomSheet={ activeBottomSheet }
                    height={ (level === 2 && mission === 2 && !qualify && !missionCompleted) ? 700 : 330 }
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
                                (showQuestion && level === 1 && mission === 1) && (
                                    <MissionOneLevelOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 1 && mission === 2) && (
                                    <MissionTwoLevelOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 1 && mission === 3) && (
                                    <MissionThreeLevelOne
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 2 && mission === 1) && (
                                    <MissionOneLevelTwo
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 2 && mission === 2) && (
                                    <MissionTwoLevelTwo
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
                                        levelTitle={ route.params.levelTitle }
                                        description={ route.params.description }
                                        missionTitle={ route.params.missionTitle! }
                                        nextMissionTitle={ route.params.nextMissionTitle! }
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
