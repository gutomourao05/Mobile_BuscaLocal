import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Entypo, Feather } from '@expo/vector-icons'

import themes from '../styles/themes'

import Home from '../pages/Home'
import SearchServices from '../pages/SearchServices'
import Welcome from '../pages/Welcome'

const Tab = createBottomTabNavigator()

export default function Tabs() {
    return(
        <Tab.Navigator 
        tabBarOptions={{
            style: {
                backgroundColor: themes.colors.backgroundTabs,
                borderTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            inactiveTintColor: '#000',
            tabStyle: {
                paddingTop: 5,
                paddingBottom: 5
            }
        }}>
            <Tab.Screen 
            name="Welcome" 
            component={Welcome}
            options={{
                tabBarLabel: 'BOAS VINDAS',
                tabBarIcon: ({size, color}) => (
                    <Entypo name="back" size={size} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: 'INICIO',
                tabBarIcon: ({size, color}) => (
                    <Entypo name="home" size={size} color={color} />
                )
            }}
            />
            
            <Tab.Screen 
            name="SearchServices" 
            component={SearchServices}
            options={{
                tabBarLabel: 'PESQUISAR',
                tabBarIcon: ({size, color}) => (
                    <Feather name="search" size={size} color={color} />
                )
            }}
            />
        </Tab.Navigator>
    )
}