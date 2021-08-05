import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Entypo, Feather } from '@expo/vector-icons'

import themes from '../styles/themes'

import Home from '../pages/Home'
import SearchServices from '../pages/SearchServices'
import Contact from '../pages/Contact'

const Tab = createBottomTabNavigator()


export default function Tabs() {
    return(
        <NavigationContainer>
            <Tab.Navigator 
            tabBarOptions={{
                style: {
                    backgroundColor: themes.colors.backgroundTabs,
                    borderTopColor: 'transparent'
                },
                activeTintColor: themes.colors.colorBackgroundBox,
                inactiveTintColor: themes.colors.colorText,
                tabStyle: {
                    paddingTop: 5,
                    paddingBottom: 5
                }
            }}>
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

                <Tab.Screen 
                name="Contact" 
                component={Contact}
                options={{
                    tabBarLabel: 'Contato',
                    tabBarIcon: ({size, color}) => (
                        <Entypo name="message" size={size} color={color} />
                    )
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}