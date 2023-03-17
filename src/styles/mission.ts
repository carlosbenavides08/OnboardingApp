import { StyleSheet } from 'react-native'

const stylesMission = StyleSheet.create({
    missionContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    missionContainerLocked: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        zIndex: 90,
    },
    textHeaderWrapper: {
        flexDirection: 'row',
        gap: 24,
        backgroundColor: '#D8DEFF',
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    textHeader: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        lineHeight: 20,
    },
    missionsBody: {
        paddingHorizontal: 20,
        paddingTop: 40,
    },
})

export {
    stylesMission
}
