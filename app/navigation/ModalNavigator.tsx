import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { BoatInformation, Definition } from '../screens'

// Each navigator needs to have it's own stack
// Why?
const ModalStack = createStackNavigator()

const ModalNavigator = () => {
  const { Navigator, Screen } = ModalStack

  return (
    <Navigator headerMode="none">
      <Screen name="BoatInformation" component={BoatInformation} />
      <Screen
        name="Definition"
        component={Definition}
        options={{
          cardOverlayEnabled: true,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.4)', opacity: 1 },
        }}
      />
    </Navigator>
  )
}

export default ModalNavigator
