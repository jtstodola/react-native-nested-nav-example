import React from 'react'
import { Icon as CustomIcon, IconProps } from 'react-native-elements'
import styles from './Icon.style'

const iconStyle = (small: boolean | undefined) =>
  small ? styles.iconSmall : styles.iconLarge

type IIconProps = Omit<IconProps, 'name'>

type CustomIconProps = {
  iconName: string
  iconType: string
  iconProps?: IIconProps
  small?: boolean
}

export const Icon: React.FunctionComponent<CustomIconProps> = ({
  iconName,
  iconType,
  iconProps,
  small,
}): JSX.Element => {
  return (
    <CustomIcon
      {...iconProps}
      name={iconName}
      type={iconType}
      color={iconProps?.color || '#fff'}
      containerStyle={
        iconProps?.containerStyle ? iconProps.containerStyle : iconStyle(small)
      }
      size={26}
    />
  )
}
