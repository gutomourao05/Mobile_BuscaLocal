import { StyleSheet } from 'react-native'
import themes from '../../styles/themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
        alignItems: 'center'
    },

    containerLogo: {
        width: '95%',
        height: 90,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
    },

    containerAdvertisement: {
        width: '95%',
        height: 90,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        marginTop: 10,
        backgroundColor: 'white',
    },

    line: {
        width: '100%',
        marginTop: 25,
        borderTopWidth: 1,
        borderColor: 'white',
        alignItems: 'center'
    },

    textLine: {
        color: 'white',
        marginTop: -10,
        backgroundColor: themes.colors.background,
        paddingHorizontal: 10
    },

    containerButtonsFilters: {
        flexDirection: 'row',
        width: '95%',
        height: 130,

        justifyContent: 'space-around',
        alignItems: 'center'
    },

    filter: {
        width: '28%',
        height: 90,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center'
    }
    
    
})

export default styles