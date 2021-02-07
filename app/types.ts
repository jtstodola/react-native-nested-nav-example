import { NavigatorScreenParams } from '@react-navigation/native'
import { Image, ImageURISource } from 'react-native'

export type TabNavigationStackParamsList = {
  Tabs: undefined
  Home: undefined
  Terminology: undefined
  Boats: NavigatorScreenParams<BoatsParamList>
  Settings: undefined
}

export type BoatsParamList = {
  BoatsList: undefined
  BoatInformation: {
    name: string
    text: string
    image: ImageURISource
    credit: string
  }
}
