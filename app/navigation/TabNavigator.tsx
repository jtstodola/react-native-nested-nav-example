import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home, Terminology, Boats, Settings } from '../screens'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

const TabStack = createBottomTabNavigator()

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
      <Screen name="Home" component={Home} />
      <Screen name="Terminology" component={Terminology} />
      <Screen name="Boats" component={Boats} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  )
}

export default TabNavigator
