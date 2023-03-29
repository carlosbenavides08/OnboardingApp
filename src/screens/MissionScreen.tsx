import React, { useContext, useState } from 'react'
import { SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

import { Header } from '../components/Header'
import { RootStackParams } from '../navigator/Navigator'

import { BottomSheet } from '../components/BottomSheet'
import { QualifyMission } from '../components/QualifyMission'
import { InstructionsLevel1Mission1 } from '../components/worldOne/levelOne/MissionOne/Instructions'
import { InstructionsLevel1Mission2 } from '../components/worldOne/levelOne/MissionTwo/Instructions'
import { InstructionsLevel1Mission3 } from '../components/worldOne/levelOne/MissionThree/Instructions'
import { InstructionsLevel2Mission1 } from '../components/worldOne/levelTwo/MissionOne/Instructions'
import { InstructionsLevel2Mission2 } from '../components/worldOne/levelTwo/MissionTwo/Instructions'
import { InstructionsLevel2Mission3 } from '../components/worldOne/levelTwo/MissionThree/Instructions'
import { InstructionsLevel3Mission1 } from '../components/worldOne/levelThree/MissionOne/Instructions'
import { InstructionsLevel3Mission2 } from '../components/worldOne/levelThree/MissionTwo/Instructions'
import { InstructionsLevel4Mission1 } from '../components/worldOne/levelFour/MissionOne/Instructions'
import { InstructionsLevel4Mission2 } from '../components/worldOne/levelFour/MissionTwo/Instructions'
import { InstructionsLevel4Mission3 } from '../components/worldOne/levelFour/MissionThree/Instructions'
import { MissionOneLevelOne } from '../components/worldOne/levelOne/MissionOne/MissionOne'
import { MissionTwoLevelOne } from '../components/worldOne/levelOne/MissionTwo/MissionTwo'
import { MissionThreeLevelOne } from '../components/worldOne/levelOne/MissionThree/MissionThree'
import { MissionOneLevelTwo } from '../components/worldOne/levelTwo/MissionOne/MissionOne'
import { MissionTwoLevelTwo } from '../components/worldOne/levelTwo/MissionTwo/MissionTwo'
import { MissionOneLevelThree } from '../components/worldOne/levelThree/MissionOne/MissionOne'
import { MissionTwoLevelThree } from '../components/worldOne/levelThree/MissionTwo/MissionTwo'
import { MissionOneLevelFour } from '../components/worldOne/levelFour/MissionOne/MissionOne'
import { MissionTwoLevelFour } from '../components/worldOne/levelFour/MissionTwo/MissionTwo'
import { MissionThreeLevelFour } from '../components/worldOne/levelFour/MissionThree/MissionThree'
import { BottomSheetCongrats } from '../components/BottomSheetCongrats'
import { FinishedMission } from '../components/FinishedMission'
import { LevelContext } from '../context/LevelContext'

import { stylesMission, stylesBottomSheet } from '../styles'

interface Props extends StackScreenProps<RootStackParams, 'MissionScreen'>{}

export const MissionScreen = ({ route, navigation }: Props) => {

    const [activeBottomSheet, setActiveBottomSheet] = useState(false)
    const [showQuestion, setShowQuestion] = useState(false)
    const [qualify, setQualify] = useState(false)
    const [missionCompleted, setMissionCompleted] = useState(false)

    const { level, mission, levelTitle, missions } = useContext(LevelContext)

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
                            ? `${
                                mission! >= 1 &&
                                    missions[mission!-1].title.length > 35 ? `${ missions[mission!-1].title.substring(0, 35) }...` : missions[mission!-1].title
                            }`
                            : `${
                                mission! >= 1 &&
                                    missions[mission!-1].title.length > 35 ? `${ missions[mission!-1].title.substring(0, 35) }...` : missions[mission!-1].title }`
                        }
                        levelTitle={ levelTitle }
                        navigation={ navigation }
                    />
                    <View style={ stylesMission.textHeaderWrapper }>
                        <Text style={ stylesMission.textHeader }>
                            {
                                route.params.nextMissionTitleBoolean
                                ?
                                    mission! >= 1 &&
                                        missions[mission!-1].description
                                : 
                                    mission! >= 1 &&
                                        missions[mission!-1].description
                            }
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
                        {
                            (level === 3 && mission === 1) && (
                                <InstructionsLevel3Mission1
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 3 && mission === 2) && (
                                <InstructionsLevel3Mission2
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 4 && mission === 1) && (
                                <InstructionsLevel4Mission1
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 4 && mission === 2) && (
                                <InstructionsLevel4Mission2
                                    slide={ slide }
                                />
                            )
                        }
                        {
                            (level === 4 && mission === 3) && (
                                <InstructionsLevel4Mission3
                                    slide={ slide }
                                />
                            )
                        }
                    </View>
                </ScrollView>
                <BottomSheet
                    activeBottomSheet={ activeBottomSheet }
                    height={
                        (level === 2 && mission === 2 && !qualify && !missionCompleted) ? 700
                        : (level === 4 && mission === 1 && !qualify && !missionCompleted) ? 380
                        : 330 }
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
                                (showQuestion && level === 3 && mission === 1) && (
                                    <MissionOneLevelThree
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 3 && mission === 2) && (
                                    <MissionTwoLevelThree
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 4 && mission === 1) && (
                                    <MissionOneLevelFour
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 4 && mission === 2) && (
                                    <MissionTwoLevelFour
                                        setQualify={ setQualify }
                                        setShowQuestion={ setShowQuestion }
                                    />
                                )
                            }
                            {
                                (showQuestion && level === 4 && mission === 3) && (
                                    <MissionThreeLevelFour
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
