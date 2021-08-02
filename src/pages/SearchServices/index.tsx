import React from 'react'
import { View, ScrollView} from 'react-native'

import styles from './styles'

// Components
import Search from '../../components/Search'
import Filters from '../../components/Filters'


export default function SearchServices() {
    return(
        <View style={styles.container}>
            <Search/>
            <ScrollView 
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                alignItems: 'center'
            }}>
                <Filters/>
                <Filters/>
                <Filters/>
            </ScrollView>
        </View>
    )
}