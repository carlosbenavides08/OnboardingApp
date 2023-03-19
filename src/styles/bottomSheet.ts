import { StyleSheet } from 'react-native'

const stylesBottomSheet = StyleSheet.create({
    contaner: {
        width: '100%',
        // height: 330,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        zIndex: 100,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
    },
    headerTitle: {
        color: 'black',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 20,
        lineHeight: 32,
    },
    body: {
        marginTop: 8,
        paddingHorizontal: 20,
    },
})

export {
    stylesBottomSheet
}
