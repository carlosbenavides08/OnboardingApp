import { StyleSheet } from 'react-native'

const stylesHome = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: '#F8FAFD',
    },
    header: {
        flexDirection: 'row',
    },
    headerWrapper: {

    },
    headerText: {
        color: 'black',
        paddingVertical: 20,
        paddingLeft: 20,
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 20,
        lineHeight: 32,
    },
    separatorHeader: {
        borderRightWidth: 1,
        borderColor: 'black',
        marginTop: 27,
        width: 10,
        height: 17,
    },
    logo: {
        width: 20,
        height: 20,
        marginTop: 25,
        marginLeft: 8,
    },
    body: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    helloWrapper: {
        flexDirection: 'row'
    },
    hello: {
        color: 'black',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 36,
        lineHeight: 48,
    },
    name: {
        color: '#E50A17',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 36,
        lineHeight: 48,
    },
    generalDescriptionWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    generalDescription: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        lineHeight: 24,
    },
    nameApp: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
        lineHeight: 24,
    },
    listContainer: {
        flex: 1,
        gap: 20,
        marginTop: 24,
    },
    missionCard: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        height: 128,
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
    missionCardDisabled: {
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
    missionTitle: {
        color: 'black',
        fontFamily: 'SolanoGothicMVBStdBd',
        fontSize: 18,
        marginTop: 16,
        marginHorizontal: 16,
        lineHeight: 28,
    },
    missionDescription: {
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
    }
})

export {
    stylesHome
}
