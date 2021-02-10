import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Pressable, Text, View } from 'react-native'

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
      <Pressable onPress={() => navigation.navigate('Tabs')}>
        <Text>Button</Text>
      </Pressable>
    </View>
  )
}

export default Splash
