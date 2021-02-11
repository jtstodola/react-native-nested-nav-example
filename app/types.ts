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

// when we have a nested params list, we need to wrap it in NavigatorScreenParams in order
// to access the nested route
export type RootNavigatorParamsList = {
  Splash: undefined
  Tabs: undefined
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>
}

export type TabNavigatorParamsList = {
  Home: undefined
  Profile: undefined
  Terminology: undefined
  Boats: undefined
  Settings: undefined
}

// This will give us access to the Modal screens from the Tab Navigator
