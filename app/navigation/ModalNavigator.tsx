import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { BoatInformation, Definition } from '../screens'
import { Platform } from 'react-native'

// Each navigator needs to have it's own stack
// Why?
const ModalStack = createStackNavigator()

const ModalNavigator = () => {
  const { Navigator, Screen } = ModalStack

  return (
    <Navigator headerMode="none" mode="modal">
      <Screen name="BoatInformation" component={BoatInformation} />
      <Screen
        name="Definition"
        component={Definition}
        options={{
          cardStyle: {
            backgroundColor:
              Platform.OS === 'android' ? '#1F2E35' : 'rgba(0, 0, 0, 0.4)',
            opacity: 1,
          },
        }}
      />
    </Navigator>
  )
}

export default ModalNavigator
