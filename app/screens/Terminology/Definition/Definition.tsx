import React from 'react'
import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ModalNavigatorParamsList } from '../../../types'
import { styles } from './styles'

export interface DefinitionProps {
  navigation: StackNavigationProp<ModalNavigatorParamsList, 'Definition'>
  route: RouteProp<ModalNavigatorParamsList, 'Definition'>
}

const Definition: React.FC<DefinitionProps> = ({ navigation, route }) => {
  const window = Dimensions.get('window')
  const modalTopPosition = window.height * 0.15

  const {
    params: { word, definition },
  } = route

  return (
    <View
      style={{
        flex: 1,
        maxHeight: 400,
        justifyContent: 'space-between',
        backgroundColor: '#30444E',
        borderRadius: 24,
        marginHorizontal: 24,
        marginTop: modalTopPosition,
        padding: 24,
      }}
    >
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 40,
            color: '#FFF',
            marginBottom: 32,
          }}
        >
          {word}
        </Text>

        <Text style={{ color: '#fff', fontSize: 20, lineHeight: 28 }}>
          {definition}
        </Text>
      </View>
      <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => {
          return navigation.goBack()
        }}
      >
        <Text
          style={{
            color: '#31AAB7',
            fontSize: 20,
            textAlign: 'center',
          }}
        >
          Close
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Definition
