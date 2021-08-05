import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import themes from '../../styles/themes'

import { Ionicons } from '@expo/vector-icons'

export default function Search() {

    const navigation = useNavigation()
    const [search, setSearch] = useState('')

    return(
        <View style={styles.containerSearch}>
            <TextInput 
            style={styles.inputSearch} 
            placeholderTextColor={themes.colors.colorPlaceholder}
            placeholder="O que você está procurando?" 
            onChangeText={(value) => setSearch(value)}
            value={search}
            />
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={ () => { navigation.navigate('SearchServices', {search: search}), setSearch(''), Keyboard.dismiss() } }
            >
                <Ionicons 
                name="search-circle-outline" 
                size={50} 
                color={themes.colors.colorPlaceholder} />
            </TouchableOpacity>
        </View>
    )
}