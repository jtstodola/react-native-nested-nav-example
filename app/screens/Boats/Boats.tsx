import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Images from '../../assets/images'
import {
  BoatParams,
  RootNavigatorParamsList,
  TabNavigatorParamsList,
} from '../../types'
import boats from './boatList'

interface ButtonProps {
  onPress: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginVertical: 8,
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 8,
      }}
    >
      {children}
    </TouchableOpacity>
  )
}
interface BoatsProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabNavigatorParamsList, 'Boats'>,
    StackNavigationProp<RootNavigatorParamsList>
  >
}

const Boats: React.FC<BoatsProps> = ({ navigation }) => {
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
            Boats
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: 24, paddingTop: 12 }}
          >
            {boats.map((boat: BoatParams) => {
              return (
                <Button
                  key={boat.name}
                  onPress={() =>
                    navigation.navigate('Modal', {
                      screen: 'BoatInformation',
                      params: {
                        ...boat,
                      },
                    })
                  }
                >
                  <Text
                    style={{
                      textAlign: 'left',
                      fontSize: 24,
                      color: '#31AAB7',
                    }}
                  >
                    {boat.name}
                  </Text>
                </Button>
              )
            })}

            <Text
              style={{
                color: '#FFF',
                paddingTop: 12,
                paddingBottom: 120,
                textAlign: 'center',
              }}
            >
              Information provided by marineinsight.com/
            </Text>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Boats
