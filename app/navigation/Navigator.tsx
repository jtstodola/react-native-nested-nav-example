import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'

import { Splash } from '../screens'
import TabNavigator from './TabNavigator'
import ModalNavigator from './ModalNavigator'
import { Route } from '@react-navigation/native'
import { ModalNavigatorParamsList } from '../types'

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

const modalScreenOptions: StackNavigationOptions = {
  cardOverlayEnabled: true,
  cardStyle: { backgroundColor: 'transparent', opacity: 1 },
  cardStyleInterpolator: ({ current: { progress } }) => ({
    cardStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 0.5, 0.9, 1],
        outputRange: [0, 0.25, 0.7, 1],
      }),
    },
    overlayStyle: {
      opacity: progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      }),
    },
  }),
}

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = MainStack

  return (
    <Navigator
      headerMode="none"
      mode="modal"
      screenOptions={({ route }) => {
        const modalOptions =
          route.params?.screen === 'Definition' ? modalScreenOptions : {}

        return {
          animationEnabled: true,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          cardStyle: { backgroundColor: 'transparent', opacity: 1 },
          ...modalOptions,
        }
      }}
    >
      <Screen name="Top" component={TopNavigator} />
      <Screen name="Modal" component={ModalNavigator} />
    </Navigator>
  )
}

export default MainNavigator
