import React from 'react'
import {
  Image,
  TouchableOpacity,
  View,
  ViewStyle,
  ImageSourcePropType,
  GestureResponderEvent,
} from 'react-native'

type AvatarProps = {
  source: ImageSourcePropType
  testID?: string
  onPress?: (event: GestureResponderEvent) => void
  disabled?: boolean
  style?: ViewStyle
}

export const Avatar: React.FunctionComponent<AvatarProps> = ({
  source,
  onPress,
  disabled,
  testID,
  style,
}) => {
  return (
    <View style={style}>
      <TouchableOpacity testID={testID} onPress={onPress} disabled={disabled}>
        <Image source={source} style={[{ borderRadius: 100, height: 44 }]} />
      </TouchableOpacity>
    </View>
  )
}
