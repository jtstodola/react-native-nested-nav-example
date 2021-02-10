import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Splash } from '../screens'
import TabNavigator from './TabNavigator'
import ModalNavigator from './ModalNavigator'

// Each navigator needs to have it's own stack
// Why?
const MainStack = createStackNavigator()
const TopStack = createStackNavigator()

const TopNavigator: React.FC = () => {
  const { Navigator, Screen } = TopStack

  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Tabs" component={TabNavigator} />
    </Navigator>
  )
}

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack

  return (
    <Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{
        animationEnabled: true,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0)', opacity: 1 },
      }}
    >
      <Screen name="Top" component={TopNavigator} />
      <Screen name="Modal" component={ModalNavigator} />
    </Navigator>
  )
}

export default MainNavigator
