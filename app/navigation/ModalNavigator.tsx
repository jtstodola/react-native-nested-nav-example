import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { BoatInformation, Definition } from '../screens'
import { ModalNavigatorParamsList } from '../types'

const ModalStack = createStackNavigator<ModalNavigatorParamsList>()

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
