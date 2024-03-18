import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    marginTop: 20,
    marginHorizontal: 24,
    backgroundColor: theme.colors.gray500,
    borderWidth: 1,
    borderColor: theme.colors.gray400,
    borderRadius: 8
  },
  title: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.gray100,
  },
  titleChecked: {
    flex: 1,
    fontSize: 14,
    color: theme.colors.gray300,
    textDecorationLine: 'line-through'
  },
  buttonRemove: {
    padding: 9,
    borderWidth: 1,
    borderColor: theme.colors.gray600,
    borderRadius: 4,
  }
})
