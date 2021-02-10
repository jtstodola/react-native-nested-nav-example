import React from 'react'
import {
  Button,
  Dimensions,
  ImageBackground,
  Pressable,
  Text,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'

import Images from '../../assets/images'
import { RootNavigationProps } from '../../types'
import { styles } from './styles'

export interface HomeProps {
  navigation: RootNavigationProps
}

const Home: React.FC<HomeProps> = () => {
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
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            paddingTop: 48,
            paddingHorizontal: 24,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                color: '#FFF',
              }}
            >
              Welcome to the Harbor!
            </Text>
            <Pressable
              onPress={() => console.log('nav')}
              style={{
                position: 'absolute',
                right: 0,
              }}
            >
              <Icon type="font-awesome" name="user" color="#fff" />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home
