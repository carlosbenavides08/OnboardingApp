import { StyleSheet } from 'react-native'

const stylesProfile = StyleSheet.create({
    body: {
        paddingHorizontal: 20,
    },
    name: {
        color: '#E50A17',
        fontFamily: 'SolanoGothicMVB-Bd',
        fontSize: 36,
        lineHeight: 48,
        marginTop: 40,
        textTransform: 'uppercase',
    },
    career: {
        color: '#42526A',
        fontFamily: 'WhitneyHTF-Medium',
        fontSize: 16,
        lineHeight: 24,
    },
    button: {
        paddingVertical: 18,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'transparent',
        borderColor: '#E50A17',
        borderWidth: 2,
        marginTop: 40,
    },
    buttonText: {
        color: '#E50A17',
        fontFamily: 'WhitneyHTF-Bold',
        fontSize: 16,
    },
})

export {
    stylesProfile
}
