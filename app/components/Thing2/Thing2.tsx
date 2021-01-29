import React from 'react'
import { Button, Dimensions, ImageBackground, Text, View } from 'react-native'

import Images from '../../assets/images'
import { styles } from './styles'

export interface HelloProps {
  name: string
  enthusiasmLevel?: number
}

const Thing2: React.FC<HelloProps> = () => {
  const screen = Dimensions.get('window')

  return (
    <View>
      <ImageBackground
        source={Images.background3}
        style={{ width: screen.width, height: screen.height }}
      >
        <View
          style={{
            width: screen.width,
            height: screen.height,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            paddingTop: 48,
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 40, color: '#FFF' }}>
            Thing 2
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Thing2
