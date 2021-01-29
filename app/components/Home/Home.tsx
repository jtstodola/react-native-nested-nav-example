import React from 'react'
import { Button, Dimensions, ImageBackground, Text, View } from 'react-native'

import Images from '../../assets/images'
import { styles } from './styles'

export interface HelloProps {
  name: string
  enthusiasmLevel?: number
}

const Home: React.FC<HelloProps> = () => {
  const screen = Dimensions.get('window')

  console.log(screen.width)
  return (
    <View>
      <ImageBackground
        source={Images.background1}
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
            Welcome Home!
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home
