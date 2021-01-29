import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home, Thing1, Thing2, Settings } from '../components'

const TabStack = createBottomTabNavigator()

const TabNavigator = () => {
  const { Navigator, Screen } = TabStack

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Thing1" component={Thing1} />
      <Screen name="Thing2" component={Thing2} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}

export default TabNavigator
