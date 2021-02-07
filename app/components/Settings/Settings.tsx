import React, { useState } from 'react'
import { Dimensions, ImageBackground, Text, View } from 'react-native'

import Images from '../../assets/images'
import { styles } from './styles'

export interface HelloProps {
  name: string
  enthusiasmLevel?: number
}

const Settings: React.FC<HelloProps> = () => {
  const screen = Dimensions.get('window')
  return (
    <View>
      <ImageBackground
        source={Images.davidCohenDingyBoats}
        style={{ width: screen.width, height: screen.height }}
      >
        <View
          style={{
            width: screen.width,
            height: screen.height,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            paddingTop: 48,
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 40, color: '#FFF' }}>
            Boats
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Settings
