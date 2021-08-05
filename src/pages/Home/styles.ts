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

        alignItems: 'center',
        justifyContent: 'center'
    },

    containerAdvertisement: {
        flexDirection: 'row',
        width: '95%',
        height: 100,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: themes.colors.colorBackgroundBox,
        marginTop: 10,
        backgroundColor: themes.colors.colorBackgroundBox,
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    containerTextAdvertisement: {
        alignItems: 'center'
    },

    titleAdvertisement: {
        fontSize: 17,
        fontWeight: 'bold'
    },

    textAdvertisement: {
        fontSize: 15
    },

    textAdvertisementPress: {
        fontSize: 15,
        fontWeight: 'bold',
        color: themes.colors.backgroundTabs
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