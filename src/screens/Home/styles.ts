import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray600,
  },
  header: {
    backgroundColor: theme.colors.gray700,
    alignItems: 'center',
    paddingVertical: 64,
  },
  form: {
    flexDirection: 'row',
    gap: 4,
    marginTop: -32,
    paddingHorizontal: 24
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: theme.colors.gray500,
    color: theme.colors.gray100,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray700,
    borderRadius: 6,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.blueDark,
    padding: 18,
    borderRadius: 6,
  },
})
