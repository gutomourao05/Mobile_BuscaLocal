import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { Fontisto, AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import styles from './styles'

export default function Filters() {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Auto Vidros e Baterias</Text>
            </View>

            <View style={styles.main}>
                <Text style={styles.textServices}>Baterias | Vidros | Maquina de Vidros</Text>
                <Text style={styles.textAddrees}>Rua Santa Clara, 372 - Sta. Mônica </Text>
                <Text style={styles.textDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quo numquam laboriosam nihil officiis. Quod, nesciunt praesentium rem quidem tempore hic laborum corrupti vel minima error ut omnis facilis voluptatum.</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Fontisto name="whatsapp" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="md-mail-outline" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <MaterialCommunityIcons name="map-marker-radius-outline" size={40} color="black" />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7}>
                    <AntDesign name="phone" size={40} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    )
}