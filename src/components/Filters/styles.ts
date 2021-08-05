import { StyleSheet } from 'react-native'
import themes from '../../styles/themes'

const styles = StyleSheet.create({
    container: {
        width: '97%',
        height: 280,
        marginBottom: 20,
        backgroundColor: themes.colors.colorBackgroundBox,
        borderWidth: 1,
        borderColor: themes.colors.backgroundTabs,
        borderRadius: 10,
    },

    header: {
        height: 50,
        borderBottomWidth: 1,
        borderColor: themes.colors.backgroundTabs,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    main: {
        flex: 1,
        alignItems: 'center',
    },

    textServices: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },

    textAddrees: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 10
    },

    textDescription: {
        fontSize: 14,
        textAlign: "justify",
        paddingHorizontal: 8,
        marginTop: 10,
        marginBottom: 10
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        padding: 3,
        borderTopWidth: 1,
        borderColor: themes.colors.backgroundTabs
    }
})

export default styles