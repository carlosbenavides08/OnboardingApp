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
        fontFamily: 'SolanoGothicMVB-Bd',
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
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 36,
        lineHeight: 48,
    },
    name: {
        color: '#E50A17',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 36,
        lineHeight: 48,
        textTransform: 'uppercase',
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
        marginTop: 24,
    },
})

export {
    stylesHome
}
