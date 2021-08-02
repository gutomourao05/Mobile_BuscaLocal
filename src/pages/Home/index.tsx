import React from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'

import styles from './styles'

import { Fontisto, Entypo, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

// Components
import Search from '../../components/Search';

export default function Home() {
    return(
        <View style={styles.container}>

            <Search/>

            <View style={styles.containerLogo}>
                <Text>Logo</Text>
            </View>
            
            <TouchableOpacity 
            style={styles.containerAdvertisement}
            activeOpacity={0.8}>
                <Text>Auto Vidros e Baterias</Text>
            </TouchableOpacity>

            <View style={styles.line}>
                <Text style={styles.textLine}>Filtros</Text>
            </View>

            <ScrollView 
            showsHorizontalScrollIndicator={false} 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                alignItems: 'center'
            }}>

                <View style={styles.containerButtonsFilters}> 
                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <Fontisto name="car" size={50} color="black" />
                        <Text>Automotivo</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <MaterialCommunityIcons name="hair-dryer" size={50} color="black" />
                        <Text>Feminina</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <FontAwesome name="cutlery" size={50} color="black" />
                        <Text>Comidas</Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.containerButtonsFilters}>
                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <Entypo name="scissors" size={50} color="black" />
                        <Text>Barbearias</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <FontAwesome5 name="bone" size={50} color="black" />
                        <Text>Pets</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <Fontisto name="shopping-bag-1" size={50} color="black" />
                        <Text>Roupas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerButtonsFilters}>
                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <MaterialIcons name="phone-android" size={50} color="black" />
                        <Text>Celulares</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <MaterialIcons name="computer" size={50} color="black" />
                        <Text>Informatica</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity style={styles.filter} activeOpacity={0.8}>
                        <FontAwesome name="gear" size={50} color="black" />
                        <Text>Serviços</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}