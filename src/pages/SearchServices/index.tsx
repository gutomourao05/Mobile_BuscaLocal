import React, { useState, useEffect, ReactNode } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'
import { RouteProp } from '@react-navigation/native'

import styles from './styles'

import api from '../../config/api'

// Components
import Search from '../../components/Search'
import Filters from '../../components/Filters'
import themes from '../../styles/themes'

type DataProps =   [{
    id: number,
        zip_code: string,
        road: string,
        district: string,
        city: string,
        number_place: string,
        name_company: string,
        show_type_services: string,
        descriptionServices: string,
        email: string,
        phone: string,
        longitude: string,
        latitude: string,
}]


type Props = {
    route: RouteProp<{params: {search: string}}, 'params' >,
}

export default function SearchServices({ route }: Props){  

    const search = route.params?.search
    const [resultData, setResultDate] = useState<DataProps>([] as unknown as DataProps)
    const [load, setLoad] = useState(false)

    useEffect(() => {
        loadSearchs(search)
    },[search])

    async function loadSearchs(search: string){
            if(search != ''){
                setLoad(true)
                await api.get(`/filter/${search}`)
                .then(response => {
                    setResultDate(response.data)
                    setLoad(false)
                })
                .catch(error => { 
                    console.log(error)
                })
            }
    }

    return(
        <View style={styles.container}>
            <Search/>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                alignItems: 'center'
            }}>
                {
                    load ? <ActivityIndicator size='large' color={themes.colors.colorBackgroundBox}/> :

                    resultData.map((resultData) => (
                        <Filters 
                        key={resultData.id}
                        zipCode={resultData.zip_code}
                        road={resultData.road}
                        district={resultData.district}
                        city={resultData.city}
                        numberPlace={resultData.number_place}
                        nameCompany={resultData.name_company}
                        showTypeServices={resultData.show_type_services}
                        descriptionServices={resultData.descriptionServices}
                        email={resultData.email}
                        phone={resultData.phone}
                        longitude={resultData.longitude}
                        latitude={resultData.latitude}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}