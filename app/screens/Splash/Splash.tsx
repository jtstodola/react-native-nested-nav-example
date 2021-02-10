import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native'
import Images from '../../assets/images'

import { RootNavigatorParamsList } from '../../types'
import styles from './styles'

export interface SplashProps {
  // StackNavigationProp<Params list, name of current route>
  navigation: StackNavigationProp<RootNavigatorParamsList, 'Tabs'>
}

const Splash: React.FC<SplashProps> = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.greeting}>Hello World!</Text>
      <Image source={Images.logo} style={{ height: 150, width: 150 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tabs')}
      >
        <Text style={styles.buttontext}>Enter the Harbor</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Splash
