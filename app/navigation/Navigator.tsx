import React from 'react'
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack'
import { Splash } from '../screens'
import { RootNavigatorParamsList, TopNavigatorParamsList } from '../types'
import TabNavigator from './TabNavigator'
// import TabNavigator from './TabNavigator1'
import ModalNavigator from './ModalNavigator'

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

// Each navigator needs to have it's own stack
// Why?

// In order to type the below route for the screen options,
// send the type arguement when creating the navigator
const MainStack = createStackNavigator<RootNavigatorParamsList>()
const TopStack = createStackNavigator<TopNavigatorParamsList>()

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = TopStack

  return (
    <Navigator headerMode="none" initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Tabs" component={TabNavigator} />
    </Navigator>
  )
}

const RootNavigator: React.FC = () => {
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
      <Screen name="Main" component={MainNavigator} />
      <Screen name="Modal" component={ModalNavigator} />
    </Navigator>
  )
}

export default RootNavigator
