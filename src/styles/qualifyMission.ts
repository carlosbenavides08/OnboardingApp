import { StyleSheet } from 'react-native'

const stylesQualifyMission = StyleSheet.create({
    title: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 14,
        lineHeight: 20,
    },
    container: {
        alignSelf: 'center',
        maxWidth: 320,
        // borderWidth: 1,
        // borderColor: 'green',
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 4,
        marginTop: 24,
        // borderWidth: 1,
        // borderColor: 'red',
    },
    legendContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    },
    legendStartText: {
        color: '#42526A',
        width: 80,
        textAlign: 'center',
        marginLeft: -8,
    },
    legendEndText: {
        color: '#42526A',
        width: 80,
        textAlign: 'center',
        marginRight: -14,
    },
})

export {
    stylesQualifyMission
}
