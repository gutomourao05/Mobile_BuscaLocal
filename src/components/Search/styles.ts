import { StyleSheet } from 'react-native'
import themes from '../../styles/themes'

const styles = StyleSheet.create({
    containerSearch: {
        width: '95%',
        marginTop: 45,
        marginBottom: 20,
        flexDirection: 'row',
        backgroundColor: themes.colors.colorBackgroundBox,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: themes.colors.colorBackgroundBox
    },

    inputSearch: {
        width: '85%',
        fontSize: 20,
        marginLeft: 5
    },
})

export default styles