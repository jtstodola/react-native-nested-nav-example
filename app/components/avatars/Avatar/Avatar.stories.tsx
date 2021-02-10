import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { Avatar } from './Avatar'
import { Images } from '../../../../themes'

storiesOf('Shipwright/Avatar/Avatar', module)
  .add('default', () => (
    <View style={{ margin: 8 }}>
      <Avatar source={Images.logo} onPress={action('tapped-avatar')} />
    </View>
  ))
  .add('with background image circle', () => (
    <View style={{ margin: 8 }}>
      <Avatar source={Images.background2} onPress={action('tapped-avatar')} />
    </View>
  ))
  .add('with background image square', () => (
    <View style={{ margin: 8 }}>
      <Avatar
        source={Images.background2}
        variant="square"
        onPress={action('tapped-avatar')}
      />
    </View>
  ))
  .add('with background image rounded', () => (
    <View style={{ margin: 8 }}>
      <Avatar
        source={Images.background2}
        variant="rounded"
        onPress={action('tapped-avatar')}
      />
    </View>
  ))
  .add('small avatar', () => (
    <View style={{ margin: 8 }}>
      <Avatar
        source={Images.logo}
        size="small"
        onPress={action('tapped-avatar')}
        disabled
      />
    </View>
  ))
  .add('large avatar', () => (
    <View style={{ margin: 8 }}>
      <Avatar
        source={Images.logo}
        size="large"
        onPress={action('tapped-avatar')}
        disabled
      />
    </View>
  ))
  .add('disabled avatar', () => (
    <View style={{ margin: 8 }}>
      <Avatar source={Images.logo} onPress={action('tapped-avatar')} disabled />
    </View>
  ))
