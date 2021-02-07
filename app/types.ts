import {
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ImageURISource } from 'react-native'

export interface BoatParams {
  name: string
  text: string
  image: ImageURISource
  credit: string
}

export type ModalNavigatorParamsList = {
  BoatInformation: BoatParams
}

// when we have a nested params list, we need to wrap it in NavigatorScreenParams in order
// to access the nested route
export type RootNavigatorParamsList = {
  Splash: undefined
  Modal: NavigatorScreenParams<ModalNavigatorParamsList>
  Tabs: undefined
}

export type TabNavigatorParamsList = {
  Home: undefined
  Terminology: undefined
  Boats: undefined
  Settings: undefined
}

// This will give us access to the Modal screens from the Tab Navigator
export type RootNavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamsList>,
  StackNavigationProp<RootNavigatorParamsList>
>
