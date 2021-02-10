import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'

import { Logo } from './Logo'
import { Colors, Images } from '../../../../themes'

storiesOf('Shipwright/Logo/Logo', module)
  .add('default', () => (
    <View style={{ margin: 8 }}>
      <Logo onPress={action('tapped-logo')}>
        <Images.LOGO_SVG height={24} width={24} />
      </Logo>
    </View>
  ))
  .add('with background logo circle', () => (
    <View style={{ margin: 8 }}>
      <Logo
        style={{ backgroundColor: Colors.alerts.infoBackground }}
        onPress={action('tapped-logo')}
      >
        <Images.LOGO_SVG height={24} width={24} />
      </Logo>
    </View>
  ))
  .add('with background logo square', () => (
    <View style={{ margin: 8 }}>
      <Logo
        variant="square"
        style={{ backgroundColor: Colors.alerts.infoBackground }}
        onPress={action('tapped-logo')}
      >
        <Images.LOGO_SVG height={24} width={24} />
      </Logo>
    </View>
  ))
  .add('with background logo rounded', () => (
    <View style={{ margin: 8 }}>
      <Logo
        variant="rounded"
        style={{ backgroundColor: Colors.alerts.infoBackground }}
        onPress={action('tapped-logo')}
      >
        <Images.LOGO_SVG height={24} width={24} />
      </Logo>
    </View>
  ))
  .add('small logo', () => (
    <View style={{ margin: 8 }}>
      <Logo
        size="small"
        style={{ backgroundColor: Colors.alerts.infoBackground }}
        onPress={action('tapped-logo')}
      >
        <Images.LOGO_SVG height={16} width={16} />
      </Logo>
    </View>
  ))
  .add('large logo', () => (
    <View style={{ margin: 8 }}>
      <Logo
        size="large"
        style={{ backgroundColor: Colors.alerts.infoBackground }}
        onPress={action('tapped-logo')}
      >
        <Images.LOGO_SVG height={72} width={72} />
      </Logo>
    </View>
  ))
