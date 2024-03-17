import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray400,
    marginTop: 20,
    marginHorizontal: 24,
  },
  image: {
    paddingTop: 48,
  },
  content: {
    paddingTop: 16
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.gray300,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: theme.colors.gray300,
    textAlign: 'center',
  }
})
