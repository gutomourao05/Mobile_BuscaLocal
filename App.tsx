import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Tabs from './src/routes/Tabs';

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent={true}/>
        <Tabs/>
    </>
  );
}