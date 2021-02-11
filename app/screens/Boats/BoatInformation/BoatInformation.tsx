import React from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import Images from '../../../assets/images'
import { ModalNavigatorParamsList } from '../../../types'
import { styles } from './styles'

export interface BoatInformationProps {
  navigation: StackNavigationProp<ModalNavigatorParamsList, 'BoatInformation'>
  route: RouteProp<ModalNavigatorParamsList, 'BoatInformation'>
}

const BoatInformation: React.FC<BoatInformationProps> = ({
  navigation,
  route,
}) => {
  const screen = Dimensions.get('window')
  const {
    params: { name, text, image, credit },
  } = route

  return (
    <>
      <View>
        <ImageBackground
          source={Images.background3}
          style={{ width: screen.width, height: screen.height }}
        >
          <View
            style={{
              width: screen.width,
              height: screen.height,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              paddingTop: 48,
              paddingBottom: 100,
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 40, color: '#FFF' }}>
              {name}
            </Text>

            <ScrollView style={{ margin: 24 }}>
              <Text style={{ color: '#fff' }}>{text}</Text>

              <Image
                source={image}
                resizeMode="contain"
                style={{
                  width: screen.width - 48,
                  height: 300,
                  marginVertical: 12,
                }}
              />
              <Text
                style={{ color: '#fff', textAlign: 'center', marginTop: 4 }}
              >
                Image from {credit}
              </Text>
            </ScrollView>

            <TouchableOpacity
              style={{ width: '100%' }}
              onPress={() => {
                return navigation.goBack()
              }}
            >
              <Text
                style={{
                  color: '#31AAB7',
                  fontSize: 28,
                  textAlign: 'center',
                }}
              >
                Go Back
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </>
  )
}

export default BoatInformation
