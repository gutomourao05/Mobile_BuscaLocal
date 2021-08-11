import React from 'react'
import { View, TouchableOpacity, Text, ScrollView, Image, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import themes from '../../styles/themes';

import { Fontisto, Entypo, FontAwesome, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import logo from '../../assets/logo.png'

// Components
import Search from '../../components/Search';

export default function Home() {
    const navigation = useNavigation()

    return(
        <View style={styles.container}>

            <Search/>

            <View style={styles.containerLogo}>
                <Image source={logo}/>
            </View>
            
            <TouchableOpacity 
            style={styles.containerAdvertisement}
            activeOpacity={0.8}
            onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5541999374355')}
            >
                <MaterialCommunityIcons name="car-battery" size={50} color={themes.colors.colorText}/>
                <View style={styles.containerTextAdvertisement}>
                    <Text style={styles.titleAdvertisement}>Auto Vidros e Baterias</Text>
                    <Text style={styles.textAdvertisement}>Para-brisa | Vigia | Laterais</Text>
                    <Text style={styles.textAdvertisement}>Temos a bateria para seu veículo</Text>
                    <Text style={styles.textAdvertisementPress}>Aperte aqui e fale com a gente</Text>
                </View>
                <MaterialCommunityIcons name="car-door" size={50} color={themes.colors.colorText} />
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
                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'automotivo'}) }
                    >
                        <Fontisto name="car" size={50} color={themes.colors.colorText} />
                        <Text>Automotivo</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'feminina'}) }
                    >
                        <MaterialCommunityIcons name="hair-dryer" size={50} color={themes.colors.colorText} />
                        <Text>Feminina</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity
                    style={styles.filter}
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'comidas'}) }
                    >
                        <FontAwesome name="cutlery" size={50} color={themes.colors.colorText} />
                        <Text>Comidas</Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.containerButtonsFilters}>
                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'barbearia'}) }
                    >
                        <Entypo name="scissors" size={50} color={themes.colors.colorText} />
                        <Text>Barbearias</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'pets'}) }
                    >
                        <FontAwesome5 name="bone" size={50} color={themes.colors.colorText} />
                        <Text>Pets</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'roupas'}) }
                    >
                        <Fontisto name="shopping-bag-1" size={50} color={themes.colors.colorText} />
                        <Text>Roupas</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerButtonsFilters}>
                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'celulares'}) }
                    >
                        <MaterialIcons name="phone-android" size={50} color={themes.colors.colorText} />
                        <Text>Celulares</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'informatica'}) }
                    >
                        <MaterialIcons name="computer" size={50} color={themes.colors.colorText} />
                        <Text>Informatica</Text>
                    </TouchableOpacity> 

                    <TouchableOpacity 
                    style={styles.filter} 
                    activeOpacity={0.8}
                    onPress={ () => navigation.navigate('SearchServices', {search: 'servicos'}) }
                    >
                        <FontAwesome name="gear" size={50} color={themes.colors.colorText} />
                        <Text>Serviços</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}