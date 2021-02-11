import React from 'react'
import {
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native'

import Images from '../../assets/images'
import terms from './terms'
import { styles } from './styles'
import { RootNavigatorParamsList, TabNavigatorParamsList } from '../../types'
import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface TerminologyProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabNavigatorParamsList, 'Terminology'>,
    StackNavigationProp<RootNavigatorParamsList>
  >
}

const Terminology: React.FC<TerminologyProps> = ({ navigation }) => {
  const screen = Dimensions.get('window')

  return (
    <View>
      <ImageBackground
        source={Images.background2}
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
            Terminology
          </Text>

          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginHorizontal: 24, paddingTop: 12 }}
          >
            {terms.map((term) => {
              return (
                <Pressable
                  key={term.word}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    marginVertical: 8,
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    borderRadius: 8,
                  }}
                  onPress={() => {
                    navigation.navigate('Modal', {
                      screen: 'Definition',
                      params: { ...term },
                    })
                  }}
                >
                  <Text
                    style={{
                      color: '#31AAB7',
                      flex: 1,
                      fontSize: 24,
                      textAlign: 'center',
                    }}
                  >
                    {term.word}
                  </Text>
                </Pressable>
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

export default Terminology
