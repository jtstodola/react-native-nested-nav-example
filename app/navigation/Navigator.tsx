import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Splash } from '../components'
import TabNavigator from './TabNavigator'

// Each navigator needs to have it's own stack
// Why?
const Stack = createStackNavigator()

const MainNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator headerMode="none" initialRouteName="Hello">
      <Screen name="Splash" component={Splash} options={{ title: '' }} />
      <Screen name="Tabs" component={TabNavigator} />
    </Navigator>
  )
}

export default MainNavigator
