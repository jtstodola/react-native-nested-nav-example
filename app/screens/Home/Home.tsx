import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Icon } from 'react-native-elements'

import Images from '../../assets/images'
import { RootNavigatorParamsList, TabNavigatorParamsList } from '../../types'
import { styles } from './styles'

export interface HomeProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Home'>
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const screen = Dimensions.get('window')

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
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                color: '#FFF',
                marginTop: 160,
              }}
            >
              Welcome to the Harbor!
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              position: 'absolute',
              right: 20,
              top: 60,
              padding: 8,
            }}
          >
            <Icon type="font-awesome" name="user" color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Home
