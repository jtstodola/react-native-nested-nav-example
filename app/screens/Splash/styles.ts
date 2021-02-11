import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#364A59',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 40,
    height: '100%',
    width: '100%',
  },
  greeting: {
    color: '#FFF',
    fontSize: 40,
  },
  button: {
    backgroundColor: '#0078CE',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#0066DD',
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.5,
    shadowOffset: { height: 2, width: 0 },
  },
  buttontext: {
    color: '#FFF',
  },
})

export default styles
