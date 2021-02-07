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
          }}
        >
          <Text
            style={{
              paddingTop: 48,
              paddingBottom: 8,
              textAlign: 'center',
              fontSize: 40,
              color: '#CCCCCC',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            Settings
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Settings
