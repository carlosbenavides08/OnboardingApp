import { StyleSheet } from 'react-native'

const stylesWorld = StyleSheet.create({
    worldCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        height: 128,
        marginBottom: 20,
        shadowColor: "rgb(203, 213, 220)",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        overflow: 'hidden'
    },
    worldCardDisabled: {
        backgroundColor: '#E6EDF3',
    },
    imageBackground: {
        backgroundColor: '#D8DEFF',
        width: 112,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackgroundDisabled: {
        backgroundColor: '#CCD9EC'
    },
    imageWorld: {
        width: 88,
        height: 88,
    },
    worldTitle: {
        color: 'black',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 18,
        marginTop: 16,
        marginHorizontal: 16,
        lineHeight: 28,
    },
    worldDescription: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 14,
        lineHeight: 20,
        marginHorizontal: 16,
    },
    starsWrapper: {
        flexDirection: 'row',
        flexShrink: 1,
        borderWidth: 1,
        borderColor: '#A3B4CC',
        paddingVertical: 3,
        paddingLeft: 4,
        paddingRight: 8,
        maxWidth: 110,
        borderRadius: 20,
        marginTop: 8,
        marginLeft: 16,
    },
    imageStar: {
        width: 14,
        height: 14,
    },
    starsCount: {
        color: 'black',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 12,
        lineHeight: 13,
        marginLeft: 5,
    },
    starsTotal: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
        fontWeight: '500',
    },
    levelsWrapper: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#A3B4CC',
        width: 82,
        borderRadius: 20,
        padding: 2,
        marginTop: 8,
        marginLeft: 16,
    },
    levelsCount: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 12,
        fontWeight: '500',
        marginLeft: 5,
    },
})

export {
    stylesWorld
}
