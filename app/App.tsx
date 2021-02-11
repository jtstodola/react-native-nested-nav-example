/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { StatusBar } from 'react-native'
import MainNavigator from './navigation/Navigator'
// import MainNavigator from './navigation/Navigator1'

const App: () => ReactNode = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <MainNavigator />
    </NavigationContainer>
  )
}

export default App
