import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {
  Dimensions,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { Icon } from 'react-native-elements'

import Images from '../../../assets/images'
import { TabNavigatorParamsList } from '../../../types'
import userProfile from './userProfile'

interface RowProps {
  label: string
  value: string
}

const Row: React.FC<RowProps> = ({ label, value }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 6,
      }}
    >
      <Text style={{ color: '#fff' }}>{label}</Text>
      <Text style={{ color: '#fff' }}>{value}</Text>
    </View>
  )
}

interface ProfileProps {
  navigation: StackNavigationProp<TabNavigatorParamsList, 'Profile'>
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const screen = Dimensions.get('window')
  const { firstName, lastName, username, email, address } = userProfile

  return (
    <View>
      <ImageBackground
        source={Images.antonShakirovLighthouse}
        style={{ width: screen.width, height: screen.height }}
      >
        <View
          style={{
            width: screen.width,
            height: screen.height,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          }}
        >
          <View
            style={{
              paddingTop: 48,
              paddingBottom: 8,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                fontSize: 40,
                color: '#CCCCCC',
              }}
            >
              Profile
            </Text>
            <TouchableOpacity
              style={{ position: 'absolute', top: 50, left: 20, padding: 8 }}
              onPress={() => navigation.goBack()}
            >
              <Icon type="font-awesome" name="arrow-left" color="#fff" />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 24, paddingTop: 12 }}>
            <View>
              <Row label="First Name" value={firstName} />
              <Row label="Last Name" value={lastName} />
              <Row label="Username" value={username} />
              <Row label="Email" value={email} />
              <Row label="Address" value={address} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Profile
