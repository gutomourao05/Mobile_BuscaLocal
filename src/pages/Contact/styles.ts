import { StyleSheet } from 'react-native'
import themes from '../../styles/themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
        alignItems: 'center'
    },

    containerPix: {
        alignItems: "center",
        marginBottom: 10
    },

    containerQrcode: {
        width: 200,
        height: 200,
        backgroundColor: themes.colors.colorBackgroundBox,
        marginTop: 55,
        marginBottom: 5
    },

    containerText: {
        alignItems: "center"
    },

    imagePix: {
        width: 200,
        height: 200,
    },

    pixTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },

    containerPixKey: {
        flexDirection: 'row',
        alignItems: "center"
    },

    textPixKey: {
        marginRight: 10
    },

    containerInformation: {
        width: '95%',
        borderWidth: 1,
        borderColor: themes.colors.colorBackgroundBox,
        borderRadius: 10,
        backgroundColor: themes.colors.colorBackgroundBox,
        padding: 10,
    },

    textInformation: {
        textAlign: 'justify',
        fontSize: 14
    },

    containerContact: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
})

export default styles