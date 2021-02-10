import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { Icon } from './Icon'

storiesOf('Shipwright/Icon', module).add('default', () => (
  <>
    <Icon iconName="location-outline" iconType="ionicon" />
  </>
))
