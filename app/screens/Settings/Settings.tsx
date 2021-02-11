import React from 'react'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { Dimensions, ImageBackground, Text, View } from 'react-native'

import Images from '../../assets/images'
import { TabNavigatorParamsList, RootNavigatorParamsList } from '../../types'
import { styles } from './styles'

export interface SettingsProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabNavigatorParamsList, 'Settings'>,
    StackNavigationProp<RootNavigatorParamsList>
  >
}

const Settings: React.FC<SettingsProps> = () => {
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
