import React, { FunctionComponent } from 'react'
import {
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native'
import { SvgProps } from 'react-native-svg'

import StyleUtils from '../../../../lib/styleUtils'
import styles from './Logo.style'

type LogoProps = {
  children: SvgProps
  testID?: string
  onPress?: (event: GestureResponderEvent) => void
  style?: StyleProp<ViewStyle>
  size?: 'small' | 'medium' | 'large'
  variant?: 'square' | 'circle' | 'rounded'
}

export const Logo: FunctionComponent<LogoProps> = ({
  children,
  onPress,
  style,
  size,
  variant,
  testID,
}) => {
  const logoSize = StyleUtils.defaultSize(size)
  const shape = StyleUtils.defaultShape(logoSize, variant)

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onPress}
      style={[logoSize, styles.logoContainer, style, { borderRadius: shape }]}
    >
      {children}
    </TouchableOpacity>
  )
}
