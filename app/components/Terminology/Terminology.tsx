import React from 'react'
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native'

import Images from '../../assets/images'
import terms from './terms'
import { styles } from './styles'

export interface HelloProps {
  name: string
  enthusiasmLevel?: number
}

const Terminology: React.FC<HelloProps> = () => {
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
                <View
                  key={term.word}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    marginVertical: 8,
                    paddingHorizontal: 12,
                    paddingVertical: 12,
                    borderRadius: 8,
                  }}
                >
                  <Text
                    style={{
                      color: '#31AAB7',
                      flex: 1,
                      fontSize: 16,
                      marginRight: 8,
                    }}
                  >
                    {term.word}:
                  </Text>
                  <Text style={{ color: '#fff', flex: 3 }}>
                    {term.definition}
                  </Text>
                </View>
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
