import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'

import Tabs from './src/routes/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent={true}/>
      <Tabs/>
    </NavigationContainer>
  );
}