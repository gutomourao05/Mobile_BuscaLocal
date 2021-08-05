import React, { useState, useEffect } from 'react'
import { View, ScrollView, ActivityIndicator } from 'react-native'

import styles from './styles'

import api from '../../config/api'

// Components
import Search from '../../components/Search'
import Filters from '../../components/Filters'
import themes from '../../styles/themes'

export default function SearchServices({ route }){  

    const search = route.params?.search
    const [resultData, setResultDate] = useState([])
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

                    resultData.map(result => (
                        <Filters 
                        key={result.id}
                        zipCode={result.zip_code}
                        road={result.road}
                        district={result.district}
                        city={result.city}
                        numberPlace={result.number_place}
                        nameCompany={result.name_company}
                        showTypeServices={result.show_type_services}
                        descriptionServices={result.descriptionServices}
                        email={result.email}
                        phone={result.phone}
                        longitude={result.longitude}
                        latitude={result.latitude}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}