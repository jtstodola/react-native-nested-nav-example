import { ImageURISource } from 'react-native'
import { NavigatorScreenParams } from '@react-navigation/native'

export type BoatParams = {
  name: string
  text: string
  image: ImageURISource
  credit: string
}

export type ModalNavigatorParamsList = {
  BoatInformation: BoatParams
  Definition: { word: string; definition: string }
}

export type TopNavigatorParamsList = {
  Splash: undefined
  Tabs: undefined
}

export type RootNavigatorParamsList = {
  Main: NavigatorScreenParams<TopNavigatorParamsList>
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>
}

export type TabNavigatorParamsList = {
  Home: undefined
  Profile: undefined
  Terminology: undefined
  Boats: undefined
  Settings: undefined
}
