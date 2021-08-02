import React from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'

import styles from './styles'

import { Ionicons } from '@expo/vector-icons'

export default function Search() {
    return(
        <View style={styles.containerSearch}>
            <TextInput 
            style={styles.inputSearch} 
            placeholderTextColor="#808080"
            placeholder="O que você está procurando?" />
            <TouchableOpacity activeOpacity={0.5}>
                <Ionicons 
                name="search-circle-outline" 
                size={50} 
                color="black" />
            </TouchableOpacity>
        </View>
    )
}