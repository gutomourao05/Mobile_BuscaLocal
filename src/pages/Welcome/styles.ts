import { StyleSheet } from 'react-native'
import themes from '../../styles/themes'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.background,
        alignItems: 'center'
    },

    containerLogo: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        marginTop: 55
    }
})

export default styles