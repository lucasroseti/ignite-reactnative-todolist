import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    paddingTop: 32,
  },
  created: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.blue
  },
  completed: {
    fontSize: 14,
    fontWeight: 'bold',
    color: theme.colors.purple
  }
})
