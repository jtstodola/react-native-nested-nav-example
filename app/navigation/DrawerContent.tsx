import React, { FunctionComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerContentOptions,
  DrawerContentComponentProps,
} from '@react-navigation/drawer'
import { Icon } from 'react-native-elements'

import Images from '../assets/images'

interface NavigationProps {
  label: string
  location: string
}
type DrawerSideNavigationProps = {
  sideNavigation: Array<NavigationProps>
}

type DrawerContentProps = DrawerContentComponentProps<DrawerContentOptions> &
  DrawerSideNavigationProps

const DrawerContent: FunctionComponent<DrawerContentProps> = ({
  navigation,
  sideNavigation,
}) => {
  return (
    <View style={{ height: '100%', minWidth: '50%', paddingHorizontal: 6 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginTop: 32,
          height: 80,
        }}
      >
        <Images.logo height={40} width={40} />

        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
        >
          <Text>Close</Text>
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView>
        {sideNavigation.map((sideNav: NavigationProps) => {
          return (
            <DrawerItem
              key={sideNav.location}
              label={sideNav.label}
              labelStyle={{ marginLeft: -8 }}
              onPress={() => navigation.navigate(sideNav.location)}
              icon={() => (
                <Icon
                  name="circle"
                  type="font-awesome"
                  size={10}
                  style={{
                    color: '#0078CE',
                    paddingTop: 11,
                  }}
                />
              )}
            />
          )
        })}
      </DrawerContentScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: 90,
          marginBottom: 32,
        }}
      >
        <Text style={{ textAlign: 'left' }}>Jane Doe</Text>
      </View>
    </View>
  )
}

export default DrawerContent
