import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { BoatInformation, Splash } from '../components'
import TabNavigator from './TabNavigator'

// Each navigator needs to have it's own stack
// Why?
const Stack = createStackNavigator()
const ModalStack = createStackNavigator()

const ModalNavigator = () => {
  const { Navigator, Screen } = ModalStack

  return (
    <Navigator headerMode="none" mode="modal">
      <Screen name="BoatInformation" component={BoatInformation} />
    </Navigator>
  )
}

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator headerMode="none" initialRouteName="Hello" mode="modal">
      <Screen name="Splash" component={Splash} options={{ title: '' }} />
      <Screen name="Modal" component={ModalNavigator} />
      <Screen name="Tabs" component={TabNavigator} />
    </Navigator>
  )
}

export default MainNavigator
