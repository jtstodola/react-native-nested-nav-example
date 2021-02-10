import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import TabNavigator from './TabNavigator'
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator()

const sideNavigation = [
  { label: 'Page 1', location: 'Page1' },
  { label: 'Page 2', location: 'Page2' },
  { label: 'Page 3', location: 'Page3' },
]

const DrawerNavigator: React.FunctionComponent = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Launch"
      drawerContent={(props) => (
        <DrawerContent {...props} sideNavigation={sideNavigation} />
      )}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} />
    </Drawer.Navigator>
  )
}

const WrappedStack = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}

export default WrappedStack
