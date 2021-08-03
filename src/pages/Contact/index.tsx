import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import styles from './styles'
import themes from '../../styles/themes';

import { Fontisto, AntDesign } from '@expo/vector-icons';

import pix from '../../assets/pixInter.jpg'


export default function Contact() {
    return(
        <View style={styles.container}>

            <View style={styles.containerPix}>
                <View style={styles.containerQrcode}>
                    <Image source={pix} style={styles.imagePix}/>
                </View>
                
                <View style={styles.containerText}>
                    <Text style={styles.pixTitle}>Chave Aleatória</Text>
                    <View style={styles.containerPixKey}>
                        <Text style={styles.textPixKey}>1e8cd37c-a42f-4eb7-b879-ac507655d8bc</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <AntDesign name="copy1" size={24} color={themes.colors.colorText} />
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </View>

            <View style={styles.containerInformation}>
                <Text style={styles.textInformation}>
                Esse App foi criado com a finalidade de ajudar o comércio e prestadores de serviços na região de Piraquara.
                Fazendo cadastro, é uma forma do cliente encontrarem com mais facilidade seus serviços e produtos.
                </Text>

                <Text style={styles.textInformation}>
                    Este App é 100% gratuido para qualquer usuario.
                    Se você deseja contribuir para manter esse projeto estou disponibiliando Qrcode e chave pix, aceitamos qualquer valor.
                </Text>

                <Text style={styles.textInformation}>
                    Se você é comerciante ou prestador de serviços é quer cadastrar sua empresa ou serviços logo a baixo está o WhatsApp e E-mail para contato, sugestões ou reclamações.
                </Text>

                <View style={styles.containerContact}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Fontisto name="email" size={50} color={themes.colors.colorText} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7}>
                        <Fontisto name="whatsapp" size={50} color={themes.colors.colorText} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}