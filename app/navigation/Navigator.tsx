import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Hello from '../components/Hello/Hello'

const Stack = createStackNavigator()

const StackNavigator: React.FC = () => {
  const { Navigator, Screen } = Stack

  return (
    <Navigator headerMode="none" initialRouteName="Hello">
      <Screen name="Hello" component={Hello} options={{ title: '' }} />
    </Navigator>
  )
}

export default StackNavigator
