import React from 'react'
import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native'

import { Fontisto, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'
import themes from '../../styles/themes'

type Props = {
    zipCode: string,
    road: string,
    district: string,
    city: string,
    numberPlace: string,
    nameCompany: string,
    showTypeServices: string,
    descriptionServices: string,
    email: string,
    phone: string,
    longitude: string,
    latitude: string
}

export default function Filters({ zipCode, road, district, city, numberPlace, nameCompany, showTypeServices, descriptionServices, email, phone, longitude, latitude   } : Props) {
    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>{nameCompany}</Text>
            </View>

            <View style={styles.main}>
                <Text style={styles.textServices}>{showTypeServices}</Text>
                <Text style={styles.textAddrees}>{road}, {numberPlace} - {district} </Text>
                <Text style={styles.textDescription}>{descriptionServices}</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => Linking.openURL(`https://api.whatsapp.com/send?phone=55${phone}`)}
                >
                    <Fontisto name="whatsapp" size={40} color={themes.colors.colorText}/>
                </TouchableOpacity>

                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => {
                    if(Platform.OS === 'ios'){
                        Linking.openURL(`http://maps.apple.com/?ll=${longitude},${latitude}`)
                    }else {
                        Linking.openURL(`https://www.google.com/maps/dir//Rua+Santa+Clara,+372+-+Jardim+Santa+Monica,+Piraquara+-+PR/@${longitude},${latitude},16z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94dcf21345a48f17:0x42e34339f9e9d8de!2m2!1d-49.1026565!2d-25.4467085!3e0`)
                    }
                }}
                >
                    <MaterialCommunityIcons name="map-marker-radius-outline" size={40} color={themes.colors.colorText} />
                </TouchableOpacity>

                <TouchableOpacity 
                activeOpacity={0.7}
                onPress={() => {
                    if(Platform.OS === 'ios'){
                        Linking.openURL(`telprompt:${phone}`)
                    }else{
                        Linking.openURL(`tel:${phone}`)
                    }
                }}
                >
                    <AntDesign name="phone" size={40} color={themes.colors.colorText} />
                </TouchableOpacity>
            </View>

        </View>
    )
}