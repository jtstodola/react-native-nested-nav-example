import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import {
  Terminology,
  Boats,
  Settings,
  BoatInformation,
  Definition,
  Home,
  Profile,
} from '../screens'
import { createStackNavigator } from '@react-navigation/stack'

const TabStack = createBottomTabNavigator()
const HomeStack = createStackNavigator()
const BoatStack = createStackNavigator()
const TermsStack = createStackNavigator()

const BoatNavigator = () => {
  const { Navigator, Screen } = BoatStack

  return (
    <Navigator initialRouteName="BoatList">
      <Screen name="BoatList" component={Boats} />
      <Screen name="BoatInformation" component={BoatInformation} />
    </Navigator>
  )
}

const TermsNavigator = () => {
  const { Navigator, Screen } = TermsStack

  return (
    <Navigator initialRouteName="TerminologyList">
      <Screen name="TerminologyList" component={Terminology} />
      <Screen name="Definition" component={Definition} />
    </Navigator>
  )
}

const HomeNavigator = () => {
  const { Navigator, Screen } = HomeStack

  return (
    <Navigator headerMode="none" initialRouteName="HomeFeed">
      <Screen name="HomeFeed" component={Home} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  )
}
interface TabContainerProps {
  label?: string
  focused?: boolean
}

const TabContainer: React.FunctionComponent<TabContainerProps> = ({
  children,
  label,
  focused,
}) => (
  <>
    {focused ? (
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: '#31AAB7',
          alignItems: 'center',
          flex: 1,
          paddingTop: 7,
        }}
      >
        {children}
        <Text style={{ color: '#31AAB7', marginTop: 6 }}>{label}</Text>
      </View>
    ) : (
      <View
        style={{ width: '100%', alignItems: 'center', flex: 1, paddingTop: 8 }}
      >
        {children}
        <Text style={{ color: '#ACBAC3', marginTop: 6 }}>{label}</Text>
      </View>
    )}
  </>
)

const TabNavigator = () => {
  const { Navigator, Screen } = TabStack

  return (
    <Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        style: {
          height: 80,
          backgroundColor: '#30444E',
          borderTopColor: 'rgba(0, 0, 0, 0)',
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let label, iconName: string

          switch (route.name) {
            case 'Home':
              label = 'Home'
              iconName = 'home'
              break
            case 'Terminology':
              label = 'Terminology'
              iconName = 'book'
              break
            case 'Boats':
              label = 'Boats'
              iconName = 'ship'
              break
            case 'Settings':
              label = 'Settings'
              iconName = 'gear'
              break
            default:
              return null
          }
          return (
            <TabContainer label={label} focused={focused}>
              <Icon
                type="font-awesome"
                name={iconName}
                color={focused ? '#31AAB7' : '#ACBAC3'}
              />
            </TabContainer>
          )
        },
      })}
    >
      <Screen name="Home" component={HomeNavigator} />
      <Screen name="Boats" component={BoatNavigator} />
      <Screen name="Terminology" component={TermsNavigator} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}

export default TabNavigator
