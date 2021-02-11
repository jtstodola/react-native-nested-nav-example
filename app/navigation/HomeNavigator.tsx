import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Profile } from '../screens'

const HomeStack = createStackNavigator()

const HomeNavigator: React.FC = () => {
  const { Navigator, Screen } = HomeStack

  return (
    <Navigator headerMode="none">
      <Screen name="HomeFeed" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  )
}

export default HomeNavigator
