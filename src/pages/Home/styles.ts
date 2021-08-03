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
        backgroundColor: themes.colors.colorBackgroundBox,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: themes.colors.colorBackgroundBox,
    },

    containerAdvertisement: {
        width: '95%',
        height: 90,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: themes.colors.colorBackgroundBox,
        marginTop: 10,
        backgroundColor: themes.colors.colorBackgroundBox,
    },

    line: {
        width: '100%',
        marginTop: 25,
        borderTopWidth: 1,
        borderColor: themes.colors.colorBackgroundBox,
        alignItems: 'center'
    },

    textLine: {
        color: themes.colors.colorBackgroundBox,
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
        backgroundColor: themes.colors.colorBackgroundBox,
        borderWidth: 1,
        borderColor: themes.colors.colorBackgroundBox,
        borderRadius: 5,

        justifyContent: 'center',
        alignItems: 'center'
    }
    
    
})

export default styles