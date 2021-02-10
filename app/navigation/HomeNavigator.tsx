import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home, Profile } from '../screens'

// Each navigator needs to have it's own stack
// Why?
const HomeStack = createStackNavigator()

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = HomeStack

  return (
    <Navigator headerMode="none">
      <Screen name="HomeFeed" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  )
}

export default MainNavigator
