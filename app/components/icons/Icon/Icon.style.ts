import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../../../themes'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.buttonContainer.container,
    flexDirection: 'row',
  },
  disabledContainer: {
    ...ApplicationStyles.buttonContainer.disabledContainer,
    flexDirection: 'row',
  },
  transparentContainer: {
    ...ApplicationStyles.buttonContainer.transparentContainer,
    flexDirection: 'row',
  },
  iconLarge: {
    position: 'absolute',
    top: 5,
    left: 7,
    textAlign: 'center',
  },
  iconSmall: {
    position: 'absolute',
    top: 6,
    left: 8.5,
    textAlign: 'center',
  },
})
