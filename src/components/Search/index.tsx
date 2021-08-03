import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'
import themes from '../../styles/themes'

import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    return(
        <View style={styles.containerSearch}>
            <TextInput 
            style={styles.inputSearch} 
            placeholderTextColor={themes.colors.colorPlaceholder}
            placeholder="O que você está procurando?" />
            <TouchableOpacity activeOpacity={0.5}>
                <Ionicons 
                name="search-circle-outline" 
                size={50} 
                color={themes.colors.colorText} />
            </TouchableOpacity>
        </View>
    )
}